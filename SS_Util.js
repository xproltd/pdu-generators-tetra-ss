//Function returns idx:th element from a comma separated list of elements
//Leading and trailing white spaces are removed  
function GetValue(elems,idx)
{
    elem_list = elems.split(",");
    elem = elem_list[idx];	  		
    return elem.replace(/^\s+|\s+$/g, '');
}	  
	  	  
	  	  	   
function bin2hex(bin_value)
{
//	orig_bin_value = bin_value;
    while((bin_value.length%8) != 0)
        bin_value += "0";
        
    bin_length = bin_value.length;
    
    if ((bin_length % 8) > 0)
    {
	    for (i=0; i<(8-(bin_length%8));i++)
	        bin_value += "0";
    }
    
    hex_value="";
    hex_length = 0;
    
    for (i=0; i<bin_length; i+=4)
    {
	    quartet = bin_value.substring(i,4+i)
    	
	    if (quartet=="0000")
		    hex_value += "0";
	    if (quartet=="0001")
		    hex_value += "1";
	    if (quartet=="0010")
		    hex_value += "2";
	    if (quartet=="0011")
		    hex_value += "3";
	    if (quartet=="0100")
		    hex_value += "4";
	    if (quartet=="0101")
		    hex_value += "5";
	    if (quartet=="0110")
		    hex_value += "6";
	    if (quartet=="0111")
		    hex_value += "7";
	    if (quartet=="1000")
		    hex_value += "8";
	    if (quartet=="1001")
		    hex_value += "9";
	    if (quartet=="1010")
		    hex_value += "A";
	    if (quartet=="1011")
		    hex_value += "B";
	    if (quartet=="1100")
		    hex_value += "C";
	    if (quartet=="1101")
		    hex_value += "D";
	    if (quartet=="1110")
		    hex_value += "E";
	    if (quartet=="1111")
		    hex_value += "F";
	                        
	    hex_length += 1;
	    
	    if ((hex_length %2) == 0)
		    hex_value += " ";
    }

    //alert(bin_length + ":" + bin_length/8 + ":" + bin_length%8);
    
    //if ((bin_length%8) > 0)	
	  //  hex_value += "0";

    //if ((hex_value.length%3) > 0)	
	  //  hex_value += "0";

//	  return hex_value + "\n" + orig_bin_value;
	  return hex_value;
}

function hex2bin(hex_value)
{
	hex_length = hex_value.length;
	bin_value ='';
		
	for (i=0; i<hex_length; i+=1)
	{
		digit = hex_value.substring(i,1+i)
		
		if (digit == '0')
			bin_value += "0000";
		if (digit == '1')
			bin_value += "0001";
		if (digit == '2')
			bin_value += "0010";
		if (digit == '3')        
			bin_value += "0011";
		if (digit == '4')        
			bin_value += "0100";
		if (digit == '5')        
			bin_value += "0101";
		if (digit == '6')        
			bin_value += "0110";
		if (digit == '7')        
			bin_value += "0111";
		if (digit == '8')        
			bin_value += "1000";
		if (digit == '9')        
			bin_value += "1001";
		if (digit == 'a')        
			bin_value += "1010";
		if (digit == 'b')        
			bin_value += "1011";
		if (digit == 'c')        
			bin_value += "1100";
		if (digit == 'd')        
			bin_value += "1101";
		if (digit == 'e')        
			bin_value += "1110";
		if (digit == 'f')        
			bin_value += "1111";
		if (digit == 'A')        
			bin_value += "1010";
		if (digit == 'B')        
			bin_value += "1011";
		if (digit == 'C')        
			bin_value += "1100";
		if (digit == 'D')        
			bin_value += "1101";
		if (digit == 'E')        
			bin_value += "1110";
		if (digit == 'F')        
			bin_value += "1111";
	}	                       
	
	return bin_value;
}

function digit2bin(digit_value)
{
	digit_length = digit_value.length;
	bin_value ='';
		
	for (i=0; i<digit_length; i+=1)
	{
		digit = digit_value.substring(i,1+i)
		
		if (digit == '0')
			bin_value += "0000";
		if (digit == '1')
			bin_value += "0001";
		if (digit == '2')
			bin_value += "0010";
		if (digit == '3')        
			bin_value += "0011";
		if (digit == '4')        
			bin_value += "0100";
		if (digit == '5')        
			bin_value += "0101";
		if (digit == '6')        
			bin_value += "0110";
		if (digit == '7')        
			bin_value += "0111";
		if (digit == '8')        
			bin_value += "1000";
		if (digit == '9')        
			bin_value += "1001";
		if (digit == '*')        
			bin_value += "1010";
		if (digit == '#')        
			bin_value += "1011";
		if (digit == '+')        
			bin_value += "1100";
	}	                       
	
	return bin_value;
}

function dec2bin(dec_value,bit_length)
{
    bin_value = "";
    remainder = 1;
	dec_value = parseInt(dec_value);
    while (dec_value != 0)
    {
		reminder = dec_value % 2;
        bin_value = reminder + bin_value;
        dec_value = Math.floor(dec_value/2);
    }
    if (bin_value.length < bit_length)
    {
        while (bin_value.length<bit_length)
        {
	        bin_value = "0" + bin_value;
        }
    }
    else if (bin_value.length > bit_length)
    {
//		bin_value = "dec2bin conversion failed, resolution too short!";
		bin_value = "";
		for (i=0; i<bit_length; i+=1)
		{
			bin_value += "1";
		}
	}
	
	return bin_value;
}

function text2hex(text_value)
{
    var text_char = 0;
    var hex_char = "";
		
    hex_value = "";

	text_length = text_value.length;    
	for (i=0; i<text_length; i+=1)
	{
		text_char = text_ascii_value(text_value,i);
		hex_char = text_char;
		
		hex_value += hex_char;
    }
    return hex_value;
}

function text2bin(text_value)
{
    //return text_value;
    //return text2hex(text_value);
    return hex2bin(text2hex(text_value));
}

function OnEnableDisable_Ctrl(ctrl_stat,ctrl_val)
{
    if (ctrl_stat.value != "0")
    {
        ctrl_val.disabled = false;
        ctrl_val.disabled = false;
    }
    else
    {
        ctrl_val.disabled = true;
        ctrl_val.disabled = true;
    }
    
}    

function text_ascii_value(c,idx)
{
	// restrict input to a single character
	c = c.charAt(idx);

	// loop through all possible ASCII values
	var i;
	for (i = 0; i < 256; ++ i)
	{
		// convert i into a 2-digit hex string
		var h = i.toString(16);
		if (h.length == 1)
			h = "0" + h;

		// insert a % character into the string
		h = "%" + h;

		// determine the character represented by the escape code
		h = unescape (h);

		// if the characters match, we've found the ASCII value
		if (h == c)
			break;
	}
	
	return i.toString(16);
}

function WriteToFile(filename, text) 
{
    try 
    {
        var fso, s;
        fso = new ActiveXObject("Scripting.FileSystemObject");
        s = fso.OpenTextFile(filename , 8, 1, -2);
        s.writeline(text);
        s.Close();
    }
    catch(err)
    {
        var strErr = 'Error:';
        strErr += '\nNumber:' + err.number;
        strErr += '\nDescription:' + err.description;
        alert(strErr);
    }
}


function Autosize_IFrame(ctrl)
{
    ctrl.height = ctrl.contentWindow.document.getElementById("Form1").offsetHeight + 20;                
}
