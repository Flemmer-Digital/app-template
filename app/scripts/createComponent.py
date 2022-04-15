import sys
import os


name = sys.argv[1]
capitalName = name.capitalize()
fileContents = f"""import React from 'react';
import styles from './{name}Styles';

interface {capitalName}Props {{}}

const {capitalName}: React.FC<{capitalName}Props> = () => {{
  return <></>;
}};

export default {capitalName};
"""

styleContents = f"""import {{StyleSheet, Dimensions}} from 'react-native';
const {{width, height}} = Dimensions.get('window');
export const vh = height / 100;
export const vw = width / 100;

const {name}Styles = StyleSheet.create({{}});

export default {name}Styles;
"""

testContents = f"""import {capitalName} from './{name}'

"""

# Create component folder
newComponentFolder = os.path.join(os.getcwd(), f"src/components/{name}")
try:
  os.mkdir(newComponentFolder)
  # print(f"Creating Component: {name}")
  with open(f"./src/components/{name}/{name}.tsx", "w") as f:
      f.write(fileContents)
      
  with open(f"./src/components/{name}/{name}Styles.ts", "w") as f:
      f.write(styleContents)

  with open(f"./src/components/{name}/{name}.test.tsx", "w") as f:
      f.write(testContents)
      
  print(f"SUCCESS\nCreated Component '{name}'\n")
except FileExistsError:
  print(f"\n*** ERROR\n*** Component '{name}' already exists\n")


    
