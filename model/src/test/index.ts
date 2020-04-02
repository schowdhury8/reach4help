import { IsObject, IsOptional, IsString } from 'class-validator';
import { Ref, collection } from 'typesaurus';

import { FirestoreDataConverter } from '../utils';

export interface ITestObject {
  /**
   * This is a reference to some other object
   */
  testRef: Ref<ITestObject> | null;
  /**
   * Some description
   */
  displayName: string | null;
}

export class TestObject
  implements ITestObject, FirestoreDataConverter<TestObject, ITestObject> {
  @IsOptional()
  @IsObject()
  private _testRef: Ref<TestObject> | null;

  @IsString()
  private _displayName: string | null;

  constructor(
    testRef: Ref<TestObject> | null,
    displayName: string | null = null,
  ) {
    this._testRef = testRef;
    this._displayName = displayName;
  }

  get testRef() {
    return this._testRef;
  }

  get displayName() {
    return this._displayName;
  }

  static fromFirestore = (data: ITestObject): TestObject => {
    return new TestObject(data.testRef, data.displayName);
  };

  fromFirestore = TestObject.fromFirestore;

  toFirestore(modelObject: TestObject): ITestObject {
    return {
      testRef: modelObject.testRef,
      displayName: modelObject.displayName,
    };
  }
}

export const testCollection = collection<TestObject>('test');
