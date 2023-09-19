function function1()
{
let my1 = document.getElementById('check1')
    if(my1.checked)
    {
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("brush.png"), auto';
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let painting = false;

        canvas.addEventListener('mousedown', () => {
            painting = true;
            ctx.beginPath();
        });

        canvas.addEventListener('mouseup', () => {
            painting = false;
            ctx.closePath();
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!painting) return;

            ctx.lineWidth = 20; // Brush size
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000'; // Brush color

            ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            ctx.stroke();
        });

        canvas.addEventListener('mouseleave', () => {
            painting = false;
            ctx.closePath();
        });
    
}
function function2()
{
let my1 = document.getElementById('check2')
    if(my1.checked)
    {
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("pen.png"), auto';
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    
}
function function3()
{
let my1 = document.getElementById('check3')
    if(my1.checked)
    {
        
        let canvas = document.querySelector('.brush-container')
        canvas.style.cursor = 'url("eraser.png"), auto';
        canvas.style.cursor.transform = '2s'
    }
    else
    {
    let canvas = document.querySelector('.brush-container')
    canvas.style.cursor = '';
    }
    
}

function function4()
{

console.log(document.querySelector('#range1').value)
}
  

