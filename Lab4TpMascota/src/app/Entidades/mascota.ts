export class Mascota {
    Nombre: string = "";
    Foto: string = "";
    Tipo: string = "";

    constructor(nom, img, tipo)
    {
        this.Nombre = nom;
        this.Foto = img;
        this.Tipo = tipo;
    }
}
