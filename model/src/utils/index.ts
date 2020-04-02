export interface FirestoreDataConverter<T, Interface> {
  /**
   * Called by the Firestore SDK to convert a custom model object of type T
   * into a plain Javascript object (suitable for writing directly to the
   * Firestore database).
   */
  toFirestore(modelObject: T): Interface;

  /**
   * Called by the Firestore SDK to convert Firestore data into an object of
   * type T.
   */
  fromFirestore(data: Interface): T;
}
