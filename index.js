window.onload=function(){
    var list = document.getElementById("shuffleAndSort"),
    button = document.getElementById("shuffle");
      button = document.getElementById("asceSort");
    function shuffle(items)
    {
        var cached = items.slice(0), temp, i = cached.length, rand;
        while(--i)
        {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }
    function shuffleNodes()
    {
        var nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while(i < nodes.length)
        {
            list.appendChild(nodes[i]);
            ++i;
        }
    } 
    document.getElementById("shuffle").onclick = shuffleNodes;
    
   
    } 

    function sortList() {
        var list, i, switching, b, shouldSwitch;
        list = document.getElementById("shuffleAndSort");
        switching = true;
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("LI");
            
            for (i = 0; i < (b.length - 1); i++) {
            
            shouldSwitch = false;
            
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
            }
            if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            }
        }
    }