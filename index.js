let items=[];

const itemsDiv=document.getElementById("items");
const input=document.getElementById("itemInput");
const storageKey="items";



function renderItems(){
    itemsDiv.innerHTML=null;

    for (const [idx,item] of Object.entries(items)){
        const container=document.createElement("div");
        container.style.marginBottom="10px";

        const text =document.createElement("p");
        text.style.display="inline";
        text.style.marginRight="10px"
        text.textContent=item;

        const btr=document.createElement("button");
        btr.textContent="Delete";
        btr.onclick = () => removeItems(idx);

        container.appendChild(text);
        container.appendChild(btr);
        itemsDiv.appendChild(container);
    }

}

function saveItems(){
    const stringItems=JSON.stringify(items);
    localStorage.setItem(storageKey,stringItems);


}

function loadItems(){
    const oldItems=localStorage.getItem(storageKey);
    if (oldItems){
        items=JSON.parse(oldItems);
    }
    renderItems();

}

function addItem(){
    const value=input.value;
    if(value){
        items.push(value);
        saveItems();
        renderItems();
        input.value="";
    
    }
    
}

function removeItems(index){
    items.splice(index,1);
    saveItems();
    renderItems();
}

document.addEventListener("DOMContentLoaded",loadItems);
