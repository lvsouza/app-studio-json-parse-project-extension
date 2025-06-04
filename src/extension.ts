import { ExtensionBase, TParser } from '@pb/extension-basics';


new class ProjectExport extends ExtensionBase {
  parsers: TParser[] = [
    {
      key: 'project-to-json',
      parser: async () => {
        this.application.commands.editor.feedback(`Download initialized...`, 'success');
        return JSON.stringify(
          this.application.dataProviders.project()
        );
      },
    }
  ];


  async activate() {
    console.log('EXTENSION: Activating');
  }

  async deactivate() {
    console.log('EXTENSION: Deactivating');
  }
};
