let myLinkedList = {
    head: {
        value: 'je suis le premier noeud',
        next: {
            value: 'je suis le 2eme noeud',
            next: {
                value: 'je suis le 3eme noeud',
                next: {
                    value: 'je suis le 4eme noeud',
                    next: {
                        value: 'je suis le 5eme noeud',
                        next: null
                    }
                }
            }
        }
    }
}

let mySecondLinkedList = {
    head: {
        value: 6,
        next: {
            value: 2,
            next: {
                value: 9,
                next: {
                    value: 4,
                    next: {
                        value: 1,
                        next: null
                    }
                }
            }
        }
    }
}

function print(linkedlist) {
    let temp = linkedlist.head
    while (temp) {
        console.log(temp.value);
        temp = temp.next
    }
}

function browse(linkedlist) {
    let current = linkedlist.head; // on commence par la head     
    while (current) {
        current = current.next; // chaque noeud suivant devient le courant     
    }
}

function prepend(node, linkedlist) {
    node.next = linkedlist.head; // l’ancienne tête devient le noeud suivant    
    linkedlist.head = node; // ce noeud est maintenant la tête    
    return linkedlist;
}

function insertAt(index, node, linkedlist) {

    if (index == 0) {
        return prepend(node, linkedlist);
    }

    else {
        let numb = linkedlist.head
        while (index > 1) {
            numb = numb.next;
            index--
        }
        let temp = numb.next
        node.next = temp;
        numb.next = node
        return linkedlist
    }

}

// qui retourne un nouveau noeud
function createNode() {
    let content = prompt('quel est le contenu du noeud ?');
    node = { value: content, next: null };
    return node;
}

//pour enlever le premier noeud de votre liste
function removeFirst(linkedlist) {
    linkedlist.head = linkedlist.head.next
}

//pour enlever un noeud dans votre liste à l’endroit choisi
function removeAt(index, linkedlist) {
    if (index == 0) {
        removeFirst(linkedlist);
    }
    else {
        let del = linkedlist.head
        while (index > 1) {
            del = del.next;
            index--;
        }
        del.next = del.next.next;
    }
}

//pour compter le nombre des noeuds dans votre liste
function size(linkedlist) {
    let current = linkedlist.head;
    let count = 0;
    while (current) {
        current = current.next;
        count++;
    }
    return count;
}

//pour lire un élément de la liste à l’endroit choisi
function read(index, linkedlist) {
    if (index == 0) {
        console.log(linkedlist.head.value);
    }
    else {
        let current = linkedlist.head
        while (index > 0) {
            current = current.next
            index--
        }
        console.log(current.value);
    }
}

//pour insérer un nouveau noeud à la fin de votre liste
function append(node, linkedlist) {
    let current = linkedlist.head;
    let i = 0
    let numbe = size(linkedlist);
    while (i < numbe - 1) {
        current = current.next;
        i++
    }
    current.next = node;
}

//pour enlever le dernier noeud de votre liste
function removeLast(linkedlist) {
    let current = linkedlist.head;
    let i = 0
    let numbe = size(linkedlist);
    while (i < numbe - 2) {
        current = current.next;
        i++
    }
    current.next = null;
}

//Permet de rechercher un noeud par valeur
function research (search, linkedlist) {
    let valor = parseInt(search)
    let numb = size(linkedlist)
    let i = 2
    let current = linkedlist.head
    if (linkedlist.head.value == valor) {
        console.log(linkedlist.head.value)
        console.log('La valeur se trouve dans la Head')
    }
    do {
        if (current.next.value == valor) {
            console.log(current.next.value)
            console.log('La valeur se trouve dans le ' + i + 'ème noeud')
        }
        current = current.next;
        i++
    } while (i <= numb);
}

//Permet de faire un bublle sort
function bubble (linkedlist) {
    let loop = size(linkedlist);
    let current = linkedlist.head
    for (let i = 0; i < loop; i++){
        let current = linkedlist.head
        for (let j = 0; j < loop-1; j++) {
            if (current.value > current.next.value){
                let temp = current.value
                current.value = current.next.value
                current.next.value = temp
            }
            current = current.next;
        }
    }
}

//Permet de fusionner 2 listes
function gotenks (linkedlist, secondlinkedlist) {
    let numbfirst = size(linkedlist);
    let current = linkedlist.head;
    for (let i = 0; i < numbfirst-1; i++){
        current = current.next
    }
    current.next = secondlinkedlist.head
}

//Permet de remove un noeud en fonction de sa valeur
function removeValor (valor, linkedlist) {
    let remove = parseInt(valor);
    let current = linkedlist.head;
    let i = 0
    let numb = size(linkedlist)
    if (linkedlist.head.value == remove) {
        linkedlist.head = linkedlist.head.next
    }
    do {
        if (current.next.value == remove) {
            current.next = current.next.next;
            i++
        } else {
        current = current.next
        i++
        }
    } while (i < numb-1)

}

//prepend({value : 'je suis la nouvelle head', next : null}, myLinkedList);
//insertAt(2, {value : 'on test et ca marche'}, myLinkedList);
//removeFirst(myLinkedList);
//console.log(size(myLinkedList));
//removeAt(3, myLinkedList);
//createNode(content, myLinkedList);
//read (1, myLinkedList);
//append({value : 'on test et ca marche'}, myLinkedList);
//removeLast(myLinkedList);
//research (1, mySecondLinkedList)
//gotenks (myLinkedList, mySecondLinkedList);
//removeValor(9, mySecondLinkedList) 
//bubble(mySecondLinkedList)
//print(myLinkedList)
//print(mySecondLinkedList)
