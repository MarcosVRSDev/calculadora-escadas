import { Collection } from 'collect.js';

export class Result {
  public mirroMax: number;
  public title: string;
  public qtStars: number;
  public imgSrc: string;
  public floorHeight: number;
  public steps: number;
  public floor: number;
  public mirror: number;
  public length: number;
  public useNote: boolean;
  public note: string;
  public show: boolean;

  constructor(mirroMax: number,
    title: string,
    qtStars: number,
    imgSrc: string,
    floorHeight: number,
    steps: number,
    floor: number,
    mirror: number,
    length: number,
    useNote: boolean,
    note: string,
    show: boolean) {
    this.mirroMax = mirroMax,
      this.title = title,
      this.qtStars = qtStars,
      this.imgSrc = imgSrc,
      this.floorHeight = floorHeight,
      this.steps = steps,
      this.floor = floor,
      this.mirror = mirror,
      this.length = length,
      this.useNote = useNote,
      this.note = note,
      this.show = show
  }

  setFloorHeight(stairHeight: number) {
    var floorHeight = Math.ceil(stairHeight / this.mirroMax);

    this.floorHeight = parseFloat(parseFloat((stairHeight / floorHeight).toString()).toFixed(1));
  }

  setSteps(stairHeight: number) {
    this.steps = (Math.ceil(stairHeight / this.mirroMax)) - 1;
  }

  setMirror(stairHeight: number) {
    this.mirror = (Math.ceil(stairHeight / this.mirroMax));
  }

  setLength() {
    this.length = parseFloat(((this.mirror - 1) * this.floor).toFixed(1));
  }

  validadeEquals(array: Result[]): boolean {
    const arrayCollect = new Collection(array);

    const filtered = arrayCollect.where('floorHeight', this.floorHeight)
      .where('steps', this.steps)
      .where('mirror', this.mirror)
      .where('length', this.length);

    if (filtered.count() > 0) return true;

    return false;
  }
}