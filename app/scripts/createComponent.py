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

export default {capitalName};"""

styleContents = f"""import {{ StyleSheet, Dimensions }} from 'react-native';
const {{ width, height }} = Dimensions.get("window");
const vh = height / 100;
const vw = width / 100;

const {name}Styles = StyleSheet.create({{}});

export default {name}Styles;
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
      
  print(f"SUCCESS\nCreated Component '{name}'\n")
except FileExistsError:
  print(f"\n*** ERROR\n*** Component '{name}' already exists\n")


    
