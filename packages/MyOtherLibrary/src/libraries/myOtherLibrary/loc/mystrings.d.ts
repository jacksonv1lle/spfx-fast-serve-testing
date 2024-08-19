declare interface IMyOtherLibraryLibraryStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyOtherLibraryLibraryStrings' {
  const strings: IMyOtherLibraryLibraryStrings;
  export = strings;
}
