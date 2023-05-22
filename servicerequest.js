function submit1(){
    let fname=document.getElementById("firstname").value;
    if(fname=="")
    {
        document.getElementById("fnalert").innerHTML='<div class="alert alert-danger">PLEASE ENTER THE FIRST NAME !</div>';
        return false;
    }
    else
    {
        let fnamepatt=/^[A-z]+$/;
        let fn=fnamepatt.test(fname);
        if(fn==false)
        {
            document.getElementById("fnalert").innerHTML='<div class="alert alert-danger">PLEASE ENTER THE VALID NAME !</div>';
            return false;
        }
        else
        {
            document.getElementById("fnalert").innerHTML="";
        }
    }
}