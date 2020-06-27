//es5 JS

'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const post1 = new Post('Джеф', 'Лето вроде будет жарким.', new Date());
console.log(post1);
post1.edit('Отредактировано');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attached1 = new AttachedPost('Админ', 'Очень важное сообщение', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('Отредактировано админом');
console.log(attached1);

//es6 JS

class Post_2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post3 = new Post_2('Олег', 'Здесь что-то написано', new Date());
console.log(post3);
post3.edit('Сообщение измененено');
console.log(post3);


class AttachedPost_2 extends Post_2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached2 = new AttachedPost_2('Администратор', 'Скучное сообщение....', new Date());
console.log(attached2);
attached2.makeTextHighlighted();
attached2.edit('но очень важное!');
console.log(attached2);