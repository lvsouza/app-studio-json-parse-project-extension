import { ExtensionBase, TParser, } from '@pb/extension-basics';


new class ProjectExport extends ExtensionBase {
  parsers: TParser[] = [
    {
      key: 'project-to-json',
      async parser(project) {
        return JSON.stringify(project);
      },
    }
  ];


  activate() {
    console.log('EXTENSION: Activating');
  }

  deactivate() {
    console.log('EXTENSION: Deactivating');
  }
};
