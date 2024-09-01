const modalBtn = document.querySelector('.modalBtn');
const closeBtn = document.querySelector('.closeModal');
const modal = document.querySelector('[data-modal]');
const save = document.querySelector('.save');
const title = document.querySelector('#title')
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const chBoxRead = document.querySelector('#isRead');
const table = document.querySelector('table');

modalBtn.style.display = 'block';

const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.isRead) ? 'is read' : 'is not read'}`
    }
}

Book.prototype.toggle = function(){
    
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

const theHobbit = new Book('The Hobbit', 'J.R.Tolkien', 260, false);
const theBlackObelisk = new Book('The black obelisk', 'Remarque', 220, true);


addBookToLibrary(theHobbit)
addBookToLibrary(theBlackObelisk)



function rmvBtn(tableRow) {
    const dltbtn = document.createElement('button');
    dltbtn.textContent = 'Smazat';
    dltbtn.addEventListener('click', () => {
        tableRow.remove();
    })
    tableRow.append(dltbtn);
}


const gridLoad = () => {
        myLibrary.forEach((book) => {
        const tr = document.createElement('tr');
        tr.className = book.title;
        table.append(tr);
        for(const key in book){
            if(key === 'info') break;
            const td = document.createElement('td');
            if(key !== 'isRead'){
                td.textContent = book[key];
            } else {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = book[key];
                td.append(checkbox);
            }
            tr.append(td);
        }
        rmvBtn(tr)
    })
}

const newBookToGrid = (book) => {
    const tr = document.createElement('tr');
    table.append(tr);
    for(const key in book){
        if(key === 'info') break;
        const td = document.createElement('td');
        if(key !== 'isRead'){
            td.textContent = book[key];
        } else {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = book[key];
            td.append(checkbox);
        }
        tr.append(td);
    }
    rmvBtn(tr);
}

modalBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    modal.showModal();
})

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.close();
})

save.addEventListener('click', (event) => {
    event.preventDefault();
    const newBook = new Book(title.value, author.value, pages.value, chBoxRead.checked);
    addBookToLibrary(newBook);
    newBookToGrid(newBook);
})

gridLoad();