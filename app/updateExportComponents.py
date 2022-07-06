import os

# Components with multiple components inside (e.g buttons)
multiComponents = {'Button':[]}

# Create list of components excluding multiComponents
components = [f.name for f in os.scandir('./src/components') if f.is_dir() and f.name not in multiComponents]


# Get all components from multiComponents
for key in multiComponents.keys():
  sub_components = []
  for folder in os.scandir('./src/components/' + key):
    if folder.is_dir():
      sub_components.append(folder.name)
      
  multiComponents[key] = sub_components


import_string = 'import {0}, {{ {0}Props }} from \'./src/components/{0}\';\n'
multi_import_string = 'import {0}, {{ {0}Props }} from \'./src/components/{1}/{0}\';\n'

f = open('./exportComponents.ts', 'w')

for master_component in multiComponents:
  for sub_component in multiComponents[master_component]:
    f.write(multi_import_string.format(sub_component, master_component))

for component in components:
  print(import_string.format(component))
  
f.close()