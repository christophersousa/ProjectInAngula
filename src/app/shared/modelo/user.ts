export class User{
  constructor(private __name: string, private __email: string,
      private __data_nascimento: string, private __senha: string){}

  get name(){
    return this.__name;
  }

  get idade(){
    return this.__data_nascimento;
  }

  get email(){
    return this.__email;
  }
  get senha(){
    return this.__senha;
  }
}
