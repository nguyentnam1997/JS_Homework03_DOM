//Câu 1
const changeColor = document.getElementById('text');
changeColor.style.color = '#777';
changeColor.style.fontSize = '2rem';
changeColor.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';

//Câu 2
const liTags1 = document.querySelector('ul').querySelectorAll('li');
liTags1.forEach(element => {
    element.style.color = 'blue';
});

//Câu 3
//1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ulTag2 = document.getElementById('list');
for (let i = 0; i < 3; i++) {
    const item = document.createElement('li');
    item.innerText = `Item ${i + 8}`;
    ulTag2.appendChild(item);
}

//2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const firstLi = ulTag2.firstElementChild;
firstLi.style.color = 'red';

//3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const thirdLi = ulTag2.childNodes[5];
thirdLi.style.backgroundColor = 'blue';

//4. Remove thẻ <li> 4
const fourthLi = ulTag2.childNodes[7];
const nextFourthLi = fourthLi.nextSibling.nextSibling;  //trỏ tới vị trí của Node sau thẻ Li 4
ulTag2.removeChild(fourthLi);

//5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLi = document.createElement('li');
newLi.innerText = 'Thẻ Li thay thế mới';
ulTag2.insertBefore(newLi, nextFourthLi);