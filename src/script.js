// custom category
document.getElementById("addCategory").addEventListener('click', function(){
    const categoryName = document.getElementById("categoryName").value.trim();
    const categoryColor = document.getElementById("categoryColor").value;
    
    if(categoryName === ""){
        alert("Please enter category name");
        return;
    }
    const categoryConatainer = document.getElementById("categories");
    const newCategory = document.createElement("div")
    newCategory.classList.add("category","p-2",'drop-zone',
        'flex','flex-row','space-x-3','overflow-auto');
    newCategory.style.backgroundColor = categoryColor;
    newCategory.innerHTML = `<h2 class="text-xl font-bold p-2"> ${categoryName}</h2>`;
    categoryConatainer.appendChild(newCategory);

    //category drag and drop
    newCategory.addEventListener('dragover',e =>{
       e.preventDefault();
       newCategory.classList.add('bg-gray-400');
    })
    newCategory.addEventListener('dragleave',e =>{
        e.preventDefault();
        newCategory.classList.remove('bg-gray-400');
    })
    newCategory.addEventListener('drop',e =>{
        e.preventDefault();
        newCategory.classList.remove('bg-gray-400');
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        newCategory.appendChild(draggableElement);
    })
    
});




//image upload
document.getElementById("imageUpload"),addEventListener
('change',function(event){
    const imageContainer = document.getElementById
    ('imageContainer');
    const files = event.target.files;

    for(let i = 0; i < files.length; i++){
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event){
            const img = document.createElement('img');
            img.src = event.target.result;
            img.classList.add("draggable","image-size");
            img.alt = "Upload Image";
            img.id = "ulpadedImage" + i;
            imageContainer.appendChild(img);
            //image drag drop
            img.addEventListener('dragstart', event => {    
                event.dataTransfer.setData('text', event.target.id)
            })
        }
       
        reader.readAsDataURL(file);
    }
});


// functional code
document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', event => {

        event.dataTransfer.setData('text', event.target.id);
        
    });
});

document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', event => {
        event.preventDefault();
        zone.classList.add('bg-gray-400');
    });

    zone.addEventListener('dragleave', event => {
        event.preventDefault();
        zone.classList.remove  ('bg-gray-400');
    });
    zone.addEventListener('drop', event => {
        event.preventDefault();
        zone.classList.remove('bg-gray-400');
        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        zone.appendChild(draggableElement);
    });
});