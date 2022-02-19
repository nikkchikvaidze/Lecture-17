//1)----------------------------------------------------------------------

// Sometimes, you may want to lookup for a type in a union to by their attributes.
// In this challenge, we would like to get the corresponding type by searching for the
// common type field in the union Cat | Dog . In other words, we will expect to
// get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following
// example.

// interface Cat {
// type: 'cat'
// breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
// }
// interface Dog {
// type: 'dog'
// breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
// color: 'brown' | 'white' | 'black'
// }
// type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

type LookUp<U, T> = U extends { type: T } ? U : never;

//2)---------------------------------------------------------------

// Implement a generic Last<T> that takes an Array T and returns its last element.
// hint: use infer

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]
// type tail1 = Last<arr1> // expected to be 'c'
// type tail2 = Last<arr2> // expected to be 1

type Last<T extends any[]> = T extends [...infer U, infer R] ? R : never;

//3)-----------------------------------------------------------------

// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last
// element.
// hint: use infer

// type arr1 = ['a', 'b', 'c', 'd']
// type arr2 = [3, 2, 1]
// type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
// type re2 = Pop<arr2> // expected to be [3, 2]

type Pop<T extends any[]> = T extends [...infer U, infer T] ? U : never;
