import { ExtensionBase, Parser } from '@pb/extension-basics';


new class ProjectExport extends ExtensionBase {
  jsonParser = new Parser({
    key: 'project-to-json',
    parser: async () => {
      this.application.commands.editor.feedback(`Download initialized...`, 'success');

      const project = await this.application.dataProviders.project();

      return {
        name: project.name,
        content: JSON.stringify(project)
      };
    },
  });


  async activate() {
    console.log('EXTENSION: Activating');
    this.application.parsers.register(this.jsonParser);
  }

  async deactivate() {
    console.log('EXTENSION: Deactivating');
    this.application.parsers.unregister(this.jsonParser);
  }
};
