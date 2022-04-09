import sys

name = sys.argv[1]
capitalName = name.capitalize()
fileContents = f"""import React from 'react';
import styles from './{name}Styles';

const {capitalName}: React.FC = () => {{
  return <></>;
}};

export default {capitalName};"""

styleContents = f"""import {{ StyleSheet }} from 'react-native';
import {{ vh, vw }} from '../../styles/viewports';

const {name}Styles = StyleSheet.create({{}});

export default {name}Styles;
"""

print(f"Creating Component: {name}")
