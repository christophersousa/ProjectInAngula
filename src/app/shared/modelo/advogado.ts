export class Advogado{
  constructor(private __name: string, private __area: string,
      private __data_nascimento: string){}

  get name(){
    return this.__name;
  }

  get idade(){
    return this.__data_nascimento;
  }

  get area(){
    return this.__area;
  }
}
