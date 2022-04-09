import sys

name = sys.argv[1]
capitalName = name.capitalize()
fileContents = f"""import React from 'react';
import styles from './{name}Styles';

const {capitalName}: React.FC = () => {{
  return <></>;
}};

export default {capitalName};"""

print(f"Creating Component: {name}")
print(fileContents)