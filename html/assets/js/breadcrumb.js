const root = document.location.host;
const parts = location.href.split('/');
let breadcrumb_array = [];
let repeat_count = 0;
for(let i = parts.length - 1; i > 0; i--) {
    if(repeat_count === 0 && window.location.pathname.endsWith('index.html')) {
        repeat_count++;
        continue;
    }
    breadcrumb_array.push({
        'link': (repeat_count > 1 ? '../'.repeat(repeat_count - 1) + 'index.html' : 'index.html'),
        'name': parts[i],
    });
    repeat_count++;
    if( parts[i] === root ) {
        break;
    }
}

console.log('breadcrumb_array', breadcrumb_array);

let breadcrumb_markup = '<ul class="breadcrumb">';
for(let i = breadcrumb_array.length - 1; i > 0; i--) {
    breadcrumb_markup += `<li><a href="${breadcrumb_array[i].link}">${breadcrumb_array[i].name}</a></li>`;
}
breadcrumb_markup += '</ul>';
breadcrumb_markup += `<h1>${document.title}</h1>`;
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', breadcrumb_markup);
});
