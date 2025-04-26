import { ExtensionBase, TParser, TView, } from '@pb/extension-basics';


new class ProjectExport extends ExtensionBase {
  views: TView[] = [];
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


  activate() {
    console.log('EXTENSION: Activating');
  }

  deactivate() {
    console.log('EXTENSION: Deactivating');
  }
};
