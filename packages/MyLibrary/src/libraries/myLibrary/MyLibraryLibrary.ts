import { MyOtherLibraryLibrary } from "@spfxtesting/my-other-library";

export class MyLibraryLibrary {
  private otherLibrary:MyOtherLibraryLibrary;
  constructor(){
    this.otherLibrary = new MyOtherLibraryLibrary();
  }
  public name(): string {
    return 'MyLibraryLibrary';
  }
  public otherLibraryName():string {
    return this.otherLibrary.name();
  }
}
