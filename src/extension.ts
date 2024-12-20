import { ExtensionBase, IPlatformAction } from '@pb/extension-basics';


new class ProjectExport extends ExtensionBase {

  public platformActions: IPlatformAction[] = [
    {
      key: 'download-as-json',
      action: () => {
        console.log('EXTENSION: Download as JSON executed');

        this.application.downloadFile('fileName', 'fileType', 'fileContent')
      },
    }
  ];


  public activate() {
    console.log('EXTENSION: Activating');
  }

  public deactivate() {
    console.log('EXTENSION: Deactivating');
  }
};
