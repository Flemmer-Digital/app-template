import os

# Components with multiple components inside (e.g buttons)
multiComponents = {'Button':[]}
ignore = ['utils']

# Create list of components excluding multiComponents
components = []
for folder in os.scandir('./src/components'):
  if folder.is_dir() and folder.name not in ignore and folder.name not in multiComponents:
    components.append(folder.name)
    


# Get all components from multiComponents
for key in multiComponents.keys():
  sub_components = []
  for folder in os.scandir('./src/components/' + key):
    if folder.is_dir():
      sub_components.append(folder.name)
      
  multiComponents[key] = sub_components


import_string = 'import {0} from \'./{0}\';\n'
export_string = 'export {{ {0} }};\n'
multi_import_string = 'import {0} from \'./{1}/{0}\';\n'

f = open('./src/components/exportComponents.ts', 'w')

print('\nMulti Components:')
for master_component in multiComponents:
  for sub_component in multiComponents[master_component]:
    f.write(multi_import_string.format(sub_component, master_component))
    print('- ' + master_component + '/' + sub_component)
    
print('\nSingle Components:')
for component in components:
  f.write(import_string.format(component))
  print('- ' + component)
  
for component in components:
  f.write(export_string.format(component))
  
for master_component in multiComponents:
  for sub_component in multiComponents[master_component]:
    f.write(export_string.format(sub_component))
  
print('\nDone!')
f.close()