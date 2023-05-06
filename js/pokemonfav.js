class Character {
    constructor(id, name, image,types) {
        this.id = id
        this.name = name
        this.image = image
        this.types = types
      
    }

    toHtml(pos) {

        return `
        <div class="card" onclick="selected(${pos})">
            <p id="nombre">${this.name}</p>
            <img src="${this.image}" />
            <p id="numero">N°${this.id.toString().padStart(4, '0')}</p>
            <p id="tiposs">${this.types[0]}/${this.types[1]}</p>
          
        </div>
        `
    }
}
