/*********************************************************************************/
/*                                                                               */
/* This file is part of the Font Sofware ACSF dedicated to the design of         */
/* Advanced Cross-Stitch Fonts.                                                  */
/*                                                                               */
/* MIT License                                                                   */
/*                                                                               */
/* Copyright (C) 2017-2021, Patrick Baudin (https://github.com/pbaudin/ACSF)     */
/*                                                                               */
/* Permission is hereby granted, free of charge, to any person obtaining a copy  */
/* of this software and associated documentation files (the "Software"), to deal */
/* in the Software without restriction, including without limitation the rights  */
/* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     */
/* copies of the Software, and to permit persons to whom the Software is         */
/* furnished to do so, subject to the following conditions:                      */
/*                                                                               */
/* The above copyright notice and this permission notice (including the next     */
/* paragraph) shall be included in all copies or substantial portions of the     */
/* Software.                                                                     */
/*                                                                               */
/* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    */
/* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      */
/* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   */
/* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        */
/* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, */
/* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE */
/* SOFTWARE.                                                                     */
/*                                                                               */
/*********************************************************************************/

function helpACTION() {
    var obj = document.getElementById("helpDIV");
    obj.style.display = (obj.style.display==="block")?"none":"block";
}
function msgONINPUT(msg){
    document.getElementById("textSELECT").name = 'modified';
}
function msgFOCUSED(msg){
    msg.onfocus=null;
}
function msgONFOCUS(msg){
    msg.value="";
    msgFOCUSED(msg);
}
function clearACTION() {
    document.getElementById("msg1TEXTAREA").value = '';
    document.getElementById("msg2TEXTAREA").value = '';
    document.getElementById("msg3TEXTAREA").value = '';
    document.getElementById("msg4TEXTAREA").value = '';
    document.getElementById("msg5TEXTAREA").value = '';
    document.getElementById("msg6TEXTAREA").value = '';
    document.getElementById("msg7TEXTAREA").value = '';
    document.getElementById("msg8TEXTAREA").value = '';
}
function style(id,percent,font,size){
    var obj = document.getElementById(id);
    obj.className = font;
    obj.style.lineHeight = percent;
    obj.style.fontSize = size.toString()+"px";
}
function idHIDE(id1,id2) {
    var msg = document.getElementById(id1);
    msg.style.display = "none";
}
function idDISPLAY(id1,id2) {
    var msg = document.getElementById(id1);
    msg.style.display = "block";
}
function entryDISPLAY(entries){
    switch(entries) {
    case "8": idDISPLAY("msg8ENTRY");
    case "7": idDISPLAY("msg7ENTRY");
    case "6": idDISPLAY("msg6ENTRY");
    case "5": idDISPLAY("msg5ENTRY");
    case "4": idDISPLAY("msg4ENTRY");
    case "3": idDISPLAY("msg3ENTRY");
    case "2": idDISPLAY("msg2ENTRY");
    default: break;
    }
}
function entryACTION(entries){
    switch(entries) {
    case "8": entryDISPLAY(entries); break;
    case "7": idHIDE("msg8ENTRY"); entryDISPLAY(entries); break;
    case "6": idHIDE("msg7ENTRY"); entryDISPLAY(entries); break;
    case "5": idHIDE("msg6ENTRY"); entryDISPLAY(entries); break;
    case "4": idHIDE("msg5ENTRY"); entryDISPLAY(entries); break;
    case "3": idHIDE("msg4ENTRY"); entryDISPLAY(entries); break;
    case "2": idHIDE("msg3ENTRY"); entryDISPLAY(entries); break;
    default: idHIDE("msg2ENTRY"); break;
    }
}
function widthACTION(width){
    document.getElementById("msg1TEXTAREA").cols=width;
    document.getElementById("msg2TEXTAREA").cols=width;
    document.getElementById("msg3TEXTAREA").cols=width;
    document.getElementById("msg4TEXTAREA").cols=width;
    document.getElementById("msg5TEXTAREA").cols=width;
    document.getElementById("msg6TEXTAREA").cols=width;
    document.getElementById("msg7TEXTAREA").cols=width;
    document.getElementById("msg8TEXTAREA").cols=width;
}
function widthFORCE2(obj,width){
    obj.innerHTML=width.toString();
    widthACTION(width);
}
function widthFORCE(width){
   var obj=document.getElementById("widthVALUE");
   var val=parseInt(obj.innerHTML);
   if (width > val) widthFORCE2(obj,width);
}
function widthPLUS(zobj,lo,hi) {
    var obj=document.getElementById("widthVALUE");
    var val=parseInt(obj.innerHTML)+1;
    if (val<=hi) {
        widthFORCE2(obj,val);
        if (val-1==lo) {
            obj=document.getElementById("minusWIDTH");
            obj.disabled=false;
        }
    }
    zobj.disabled=(val>=hi);
}
function widthMINUS(zobj,lo,hi) {
    var obj=document.getElementById("widthVALUE");
    var val=parseInt(obj.innerHTML)-1;
    if (val>=lo) {
        widthFORCE2(obj,val);
        if (val+1==hi) {
            obj=document.getElementById("plusWIDTH");
            obj.disabled=false;
        }
    }
    zobj.disabled=(val<=lo);
}
function entryFORCE2(obj,entries){
    obj.innerHTML=entries.toString();
    entryACTION(obj.innerHTML);
}
function entryFORCE(entries){
    var obj=document.getElementById("entryVALUE");
    entryFORCE2(obj,entries)
}
function entryPLUS(zobj,lo,hi) {
    var obj=document.getElementById("entryVALUE");
    var val=parseInt(obj.innerHTML)+1;
    if (val<=hi) {
        entryFORCE2(obj,val);
        if (val-1==lo) {
            obj=document.getElementById("minusENTRY");
            obj.disabled=false;
        }
    }
    if (val>=hi) {
        zobj.disabled=true;
    }
}
function entryMINUS(zobj,lo,hi) {
    var obj=document.getElementById("entryVALUE");
    var val=parseInt(obj.innerHTML)-1;
    if (val>=lo) {
        entryFORCE2(obj,val);
        if (val+1==hi) {
            obj=document.getElementById("plusENTRY");
            obj.disabled=false;
        }
    }
    if (val<=lo) {
        zobj.disabled=true;
    }
}
function sizeTEXT(msg,row){
    msg.rows=row;
    msgFOCUSED(msg);
}
function textLaRose(msg1){
    var msg2=document.getElementById("msg2TEXTAREA");
    var msg3=document.getElementById("msg3TEXTAREA");
    var msg4=document.getElementById("msg4TEXTAREA");
    entryFORCE("4");
    widthFORCE(21);
    var count="______\n";
    switch(msg1.className) {
    case "Gallant": case "GallantLight":
        count="__" + count;
        sizeTEXT(msg1,2);sizeTEXT(msg2,4);sizeTEXT(msg3,5);sizeTEXT(msg4,1); break;
    case "Divine": case "DivineLight":
    case "Expressive": case "ExpressiveLight":
        count="_" + count;
        sizeTEXT(msg1,2);sizeTEXT(msg2,4);sizeTEXT(msg3,5);sizeTEXT(msg4,1); break;
    case "Festive": case "FestiveLight":
        sizeTEXT(msg1,2);sizeTEXT(msg2,4);sizeTEXT(msg3,4);sizeTEXT(msg4,1); break;
    case "Adorable": case "AdorableLight":
    case "Brave": case "BraveLight":
    case "Chic": case "ChicLight":
    default:
        count="__" + count;
        sizeTEXT(msg1,2);sizeTEXT(msg2,4);sizeTEXT(msg3,5);sizeTEXT(msg4,1); break;
    }
    msg1.value="La rose\n"
        + count;
    msg2.value="Rose $rose, $$rose blanche,\n"
        + "$$$$$$Rose thé,\n"
        + "J’ai cueilli la $$$rose en branche\n"
        + "Au soleil de l’été.";
    msg3.value="$$$Rose blanche, $$$$rose $$$$$rose,\n"
        + "$$Rose d’or,\n"
        + "J’ai cueilli la $$$$$$rose éclose\n"
        + "Et son parfum m’endort.";
    msg4.value="            Robert Desnos";
}
function alphabetTxt1(msg,s) {
  var ss="~~"+s;
  var sns="\n"+s;
  var sA="A";
  var sZ="Z";
  var v=s.charCodeAt(0);
  if (!((sA.charCodeAt(0) <= v) && (v <= sZ.charCodeAt(0)))) {
    ss=s+ss;
    sns=s+sns;
  }
  msg.value=ss+"a"+ss+"b"+ss+"c"+ss+"d"+ss+"e"+ss+"f"+sns+"g"+ss+"h"+ss+"i"+ss+"j"+ss+"k"+ss+"l"+ss+"m"+sns+"n"+ss+"o"+ss+"p"+ss+"q"+ss+"r"+ss+"s"+ss+"t"+sns+"u"+ss+"v"+ss+"w"+ss+"x"+ss+"y"+ss+"z"+s;
  sizeTEXT(msg,4);
}
function alphabetTxt2(msg,s) {
  var ss="~~"+s;
  var sns="\n"+s;
  var sA="A";
  var sZ="Z";
  var v=s.charCodeAt(0);
  if (!((sA.charCodeAt(0) <= v) && (v <= sZ.charCodeAt(0)))) {
    ss=s+ss;
    sns=s+sns;
  }
  msg.value=ss+"ä"+ss+"á"+ss+"â"+ss+"à"+ss+"å"+ss+"ã"+sns+"æ"+ss+"ß"+ss+"ç"+ss+"č"+ss+"š"+ss+"ž"+sns+"ë"+ss+"é"+ss+"ê"+ss+"è"+ss+"ï"+ss+"í"+ss+"î"+ss+"ì"+sns+"ñ"+ss+"ö"+ss+"ó"+ss+"ô"+ss+"ò"+ss+"õ"+sns+"ø"+ss+"œ"+ss+"ü"+ss+"ú"+ss+"û"+ss+"ù"+ss+"ÿ"+s;
  sizeTEXT(msg,5);
}
function alphabetTxt3(msg,s) {
  var s1=s+"~~";
  var ss=s1+s;
  var sns=s+"\n";
  msg.value=s1+"A"+s1+"B"+s1+"C"+s1+"D"+s1+"E"+s1+"F"+sns+"G"+s1+"H"+s1+"I"+s1+"J"+s1+"K"+s1+"L"+s1+"M"+sns+"N"+s1+"O"+s1+"P"+s1+"Q"+s1+"R"+s1+"S"+s1+"T"+sns+"U"+s1+"V"+s1+"W"+s1+"X"+s1+"Y"+s1+"Z"+s;
  sizeTEXT(msg,4);
}
function alphabetTxt4(msg,s) {
  var s1=s+"~~";
  var ss=s1+s;
  var sns=s+"\n";
  msg.value=s1+"Ä"+s1+"Á"+s1+"Â"+s1+"À"+s1+"Å"+s1+"Ã"+sns+"Æ"+s1+"ẞ"+s1+"Ç"+s1+"Č"+s1+"Š"+s1+"Ž"+sns+"Ë"+s1+"É"+s1+"Ê"+s1+"È"+s1+"Ï"+s1+"Í"+s1+"Î"+s1+"Ì"+sns+"Ñ"+s1+"Ö"+s1+"Ó"+s1+"Ô"+s1+"Ò"+s1+"Õ"+sns+"Ø"+s1+"Œ"+s1+"Ü"+s1+"Ú"+s1+"Û"+s1+"Ù"+s+"Ÿ"+s;
  sizeTEXT(msg,5);
}
function alphabetTxt5(msg,s) {
  msg.value=s+"~~a"+s+"a~~b"+s+"b~~c"+s+"c~~d"+s+"d~~e"+s+"e~~f"+s+"f\ng"+s+"g~~h"+s+"h~~i"+s+"i~~j"+s+"j~~k"+s+"k~~l"+s+"l~~m"+s+"m\nn"+s+"n~~o"+s+"o~~p"+s+"p~~q"+s+"q~~r"+s+"r~~s"+s+"s~~t"+s+"t\nu"+s+"u~~v"+s+"v~~w"+s+"w~~x"+s+"x~~y"+s+"y~~z"+s+"z";
  sizeTEXT(msg,5);
}
function alphabetTxt6(msg,s) {
  msg.value=s+"~~ä"+s+"ä~~á"+s+"á~~â"+s+"â~~à"+s+"à~~å"+s+"å~~ã"+s+"ã\næ"+s+"æ~~ß"+s+"ß~~ç"+s+"ç~~č"+s+"č~~š"+s+"š~~ž"+s+"ž\në"+s+"ë~~é"+s+"é~~ê"+s+"ê~~è"+s+"è~~ï"+s+"ï~~í"+s+"í~~î"+s+"î~~ì"+s+"ì\nñ"+s+"ñ~~ö"+s+"ö~~ó"+s+"ó~~ô"+s+"ô~~ò"+s+"ò~~õ"+s+"õ\nø"+s+"ø~~œ"+s+"œ~~ü"+s+"ü~~ú"+s+"ú~~û"+s+"û~~ù"+s+"ù"+s+"ÿ";
  sizeTEXT(msg,6);
}
function alphabetFORCE(obj,s) {
  obj.innerHTML = s;
  var s1=s+"~~";
  var ss=s1+s;
  var sns=s+"\n"+s;
  entryFORCE("6");
  widthFORCE(25);
  var msg1=document.getElementById("msg1TEXTAREA");
  var msg2=document.getElementById("msg2TEXTAREA");
  var msg3=document.getElementById("msg3TEXTAREA");
  var msg4=document.getElementById("msg4TEXTAREA");
  var msg5=document.getElementById("msg5TEXTAREA");
  var msg6=document.getElementById("msg6TEXTAREA");
  var obj = document.getElementById("rollVALUE");
  switch (obj.innerHTML) {
    case "1":
      alphabetTxt2(msg1,s);
      alphabetTxt3(msg2,s);
      alphabetTxt4(msg3,s);
      alphabetTxt5(msg4,s);
      alphabetTxt6(msg5,s);
      alphabetTxt1(msg6,s);
      break;
    case "2":
      alphabetTxt3(msg1,s);
      alphabetTxt4(msg2,s);
      alphabetTxt5(msg3,s);
      alphabetTxt6(msg4,s);
      alphabetTxt1(msg5,s);
      alphabetTxt2(msg6,s);
      break;
    case "3":
      alphabetTxt4(msg1,s);
      alphabetTxt5(msg2,s);
      alphabetTxt6(msg3,s);
      alphabetTxt1(msg4,s);
      alphabetTxt2(msg5,s);
      alphabetTxt3(msg6,s);
      break;
    case "4":
      alphabetTxt5(msg1,s);
      alphabetTxt6(msg2,s);
      alphabetTxt1(msg3,s);
      alphabetTxt2(msg4,s);
      alphabetTxt3(msg5,s);
      alphabetTxt4(msg6,s);
      break;
    case "5":
      alphabetTxt6(msg1,s);
      alphabetTxt1(msg2,s);
      alphabetTxt2(msg3,s);
      alphabetTxt3(msg4,s);
      alphabetTxt4(msg5,s);
      alphabetTxt5(msg6,s);
      break;
    default:
      alphabetTxt1(msg1,s);
      alphabetTxt2(msg2,s);
      alphabetTxt3(msg3,s);
      alphabetTxt4(msg4,s);
      alphabetTxt5(msg5,s);
      alphabetTxt6(msg6,s);
     break;
  }
}
function alphabetACTION(bo) {
  var obj = document.getElementById("alphabetDIV");
  obj.style.display = bo?"block":"none";
  if (bo) {
    var obj = document.getElementById("alphabetVALUE");
    alphabetFORCE(obj,obj.innerHTML);
  }
}
function alphabetROLL() {
  var obj = document.getElementById("rollVALUE");
  var s = obj.innerHTML;
  if (s=="5") obj.innerHTML="0";
  else obj.innerHTML=String.fromCharCode(s.charCodeAt(0)+1);
  var obj = document.getElementById("alphabetVALUE");
  alphabetFORCE(obj,obj.innerHTML);
}
function alphabetPLUSPLUS() {
  var obj = document.getElementById("alphabetVALUE");
  var s=obj.innerHTML;
  var v=s.charCodeAt(0);
  var sa="a";
  var sz="z";
  var sA="A";
  var sZ="Z";
  switch (s) {
    case "ä":    case "á":    case "â":    case "à":    case "å":    case "ã":
    case "æ":    case "ß":    case "č":    case "ç":    case "ë":    case "é":
    case "ê":    case "è":    case "ï":    case "í":    case "î":    case "ì":
    case "ñ":    case "ö":    case "ó":    case "ô":    case "ò":    case "õ":
    case "ø":    case "œ":    case "š":    case "ü":    case "ú":    case "û":
    case "ù":    case "ÿ":    case "ž": alphabetFORCE(obj,"A");break;
    case "Ä":    case "Á":    case "Â":    case "À":    case "Å":    case "Ã":
    case "Æ":    case "ẞ":    case "Č":    case "Ç":    case "Ë":    case "É":
    case "Ê":    case "È":    case "Ï":    case "Í":    case "Î":    case "Ì":
    case "Ñ":    case "Ö":    case "Ó":    case "Ô":    case "Ò":    case "Õ":
    case "Ø":    case "Œ":    case "Š":    case "Ü":    case "Ù":    case "Û":
    case "Ù":    case "Ÿ":    case "Ž": alphabetFORCE(obj,"0");break;
    default:
      if ((sa.charCodeAt(0) <= v) && (v <= sz.charCodeAt(0))) alphabetFORCE(obj,"ä");
      else if ((sA.charCodeAt(0) <= v) && (v <= sZ.charCodeAt(0))) alphabetFORCE(obj,"Ä");
      else alphabetFORCE(obj,"a");break;
  }
}
function alphabetMINUSMINUS() {
  var obj = document.getElementById("alphabetVALUE");
  var s=obj.innerHTML;
  var v=s.charCodeAt(0);
  var sa="a";
  var sz="z";
  var sA="A";
  var sZ="Z";
  switch (s) {
    case "ä":    case "á":    case "â":    case "à":    case "å":    case "ã":
    case "æ":    case "ß":    case "č":    case "ç":    case "ë":    case "é":
    case "ê":    case "è":    case "ï":    case "í":    case "î":    case "ì":
    case "ñ":    case "ö":    case "ó":    case "ô":    case "ò":    case "õ":
    case "ø":    case "œ":    case "š":    case "ü":    case "ú":    case "û":
    case "ù":    case "ÿ":    case "ž": alphabetFORCE(obj,"z");break;
    case "Ä":    case "Á":    case "Â":    case "À":    case "Å":    case "Ã":
    case "Æ":    case "ẞ":    case "Č":    case "Ç":    case "Ë":    case "É":
    case "Ê":    case "È":    case "Ï":    case "Í":    case "Î":    case "Ì":
    case "Ñ":    case "Ö":    case "Ó":    case "Ô":    case "Ò":    case "Õ":
    case "Ø":    case "Œ":    case "Š":    case "Ü":    case "Ù":    case "Û":
    case "Ù":    case "Ÿ":    case "Ž": alphabetFORCE(obj,"Z");break;
    default:
      if ((sa.charCodeAt(0) <= v) && (v <= sz.charCodeAt(0))) alphabetFORCE(obj,"9");
      else if ((sA.charCodeAt(0) <= v) && (v <= sZ.charCodeAt(0))) alphabetFORCE(obj,"ž");
      else alphabetFORCE(obj,"Ž");break;
  }
}
function alphabetPLUS() {
  var obj = document.getElementById("alphabetVALUE");
  var s=obj.innerHTML;
  switch (s) {
    case "z": s="ä"; break;
    case "ä": s="á"; break;
    case "á": s="â"; break;
    case "â": s="à"; break;
    case "à": s="å"; break;
    case "å": s="ã"; break;
    case "ã": s="æ"; break;
    case "æ": s="ß"; break;
    case "ß": s="č"; break;
    case "č": s="ç"; break;
    case "ç": s="ë"; break;
    case "ë": s="é"; break;
    case "é": s="ê"; break;
    case "ê": s="è"; break;
    case "è": s="ï"; break;
    case "ï": s="í"; break;
    case "í": s="î"; break;
    case "î": s="ì"; break;
    case "ì": s="ñ"; break;
    case "ñ": s="ö"; break;
    case "ö": s="ó"; break;
    case "ó": s="ô"; break;
    case "ô": s="ò"; break;
    case "ò": s="õ"; break;
    case "õ": s="ø"; break;
    case "ø": s="œ"; break;
    case "œ": s="š"; break;
    case "š": s="ü"; break;
    case "ü": s="ú"; break;
    case "ú": s="û"; break;
    case "û": s="ù"; break;
    case "ù": s="ÿ"; break;
    case "ÿ": s="ž"; break;
    case "ž": s="A"; break;
    case "Z": s="Ä"; break;
    case "Ä": s="Á"; break;
    case "Á": s="Â"; break;
    case "Â": s="À"; break;
    case "À": s="Å"; break;
    case "Å": s="Ã"; break;
    case "Ã": s="Æ"; break;
    case "Æ": s="ẞ"; break;
    case "ẞ": s="Č"; break;
    case "Č": s="Ç"; break;
    case "Ç": s="Ë"; break;
    case "Ë": s="É"; break;
    case "É": s="Ê"; break;
    case "Ê": s="È"; break;
    case "È": s="Ï"; break;
    case "Ï": s="Í"; break;
    case "Í": s="Î"; break;
    case "Î": s="Ì"; break;
    case "Ì": s="Ñ"; break;
    case "Ñ": s="Ö"; break;
    case "Ö": s="Ó"; break;
    case "Ó": s="Ô"; break;
    case "Ô": s="Ò"; break;
    case "Ò": s="Õ"; break;
    case "Õ": s="Ø"; break;
    case "Ø": s="Œ"; break;
    case "Œ": s="Š"; break;
    case "Š": s="Ü"; break;
    case "Ü": s="Ù"; break;
    case "Ù": s="Û"; break;
    case "Û": s="Ù"; break;
    case "Ù": s="Ÿ"; break;
    case "Ÿ": s="Ž"; break;
    case "Ž": s="0"; break;
    case "9": s="a"; break;
    default : s=String.fromCharCode(s.charCodeAt(0)+1);break;
    }
  alphabetFORCE(obj,s);
}
function alphabetMINUS() {
  var obj = document.getElementById("alphabetVALUE");
  var s=obj.innerHTML;
  switch (s) {
    case "ä": s="z"; break;
    case "á": s="ä"; break;
    case "â": s="á"; break;
    case "à": s="â"; break;
    case "å": s="à"; break;
    case "ã": s="å"; break;
    case "æ": s="ã"; break;
    case "ß": s="æ"; break;
    case "č": s="ß"; break;
    case "ç": s="č"; break;
    case "ë": s="ç"; break;
    case "é": s="ë"; break;
    case "ê": s="é"; break;
    case "è": s="ê"; break;
    case "ï": s="è"; break;
    case "í": s="ï"; break;
    case "î": s="í"; break;
    case "ì": s="î"; break;
    case "ñ": s="ì"; break;
    case "ö": s="ñ"; break;
    case "ó": s="ö"; break;
    case "ô": s="ó"; break;
    case "ò": s="ô"; break;
    case "õ": s="ò"; break;
    case "ø": s="õ"; break;
    case "œ": s="ø"; break;
    case "š": s="œ"; break;
    case "ü": s="š"; break;
    case "ú": s="ü"; break;
    case "û": s="ú"; break;
    case "ù": s="û"; break;
    case "ÿ": s="ù"; break;
    case "ž": s="ÿ"; break;
    case "A": s="ž"; break;
    case "Ä": s="Z"; break;
    case "Á": s="Ä"; break;
    case "Â": s="Á"; break;
    case "À": s="Â"; break;
    case "Å": s="À"; break;
    case "Ã": s="Å"; break;
    case "Æ": s="Ã"; break;
    case "ẞ": s="Æ"; break;
    case "Č": s="ẞ"; break;
    case "Ç": s="Č"; break;
    case "Ë": s="Ç"; break;
    case "É": s="Ë"; break;
    case "Ê": s="É"; break;
    case "È": s="Ê"; break;
    case "Ï": s="È"; break;
    case "Í": s="Ï"; break;
    case "Î": s="Í"; break;
    case "Ì": s="Î"; break;
    case "Ñ": s="Ì"; break;
    case "Ö": s="Ñ"; break;
    case "Ó": s="Ö"; break;
    case "Ô": s="Ó"; break;
    case "Ò": s="Ô"; break;
    case "Õ": s="Ò"; break;
    case "Ø": s="Õ"; break;
    case "Œ": s="Ø"; break;
    case "Š": s="Œ"; break;
    case "Ü": s="Š"; break;
    case "Ù": s="Ü"; break;
    case "Û": s="Ù"; break;
    case "Ù": s="Û"; break;
    case "Ÿ": s="Ù"; break;
    case "Ž": s="Ÿ"; break;
    case "0": s="Ž"; break;
    case "a": s="9"; break;
    default : s=String.fromCharCode(s.charCodeAt(0)-1);break;
    }
  alphabetFORCE(obj,s);
}
function textACTION(value){
    var msg1=document.getElementById("msg1TEXTAREA");
    if (value != "None") msgFOCUSED(msg1);
    switch(value) {
    case "Digits": msg1.value="0123456789 7/3 4°5"; break;
    case "Lowercase": msg1.value="a~b~c~d~e~f~g~h~i~j~k~l~m\n"+"n~o~p~q~r~s~t~u~v~w~x~y~z";
        widthFORCE(6); sizeTEXT(msg1,2); break;
    case "Uppercase": msg1.value="A~B~C~D~E~F~G~H~I~J~K~L~M\n"+"N~O~P~Q~R~S~T~U~~VW~~X~YZ";
        widthFORCE(6); sizeTEXT(msg1,2); break;
    case "Vowels": msg1.value="A~E~I~O~U~Y Æ~Œ a~e~i~o~u~y æ~œ"; break;
    case "Cedilla": msg1.value="Çç"; break;
    case "Circumflex": msg1.value="Â~Ê~Î~Ô~Û â~ê~î~ô~û"; break;
    case "Acute": msg1.value="Á~É~~ÍÓ~Ú á~é~í~ó~ú"; break;
    case "Dieris": msg1.value="Ä~Ë~Ï~Ö~Ü~Ÿ ä~ë~ï~ö~ü~ÿ"; break;
    case "Grave": msg1.value="À~È~Ì~Ò~Ù à~è~ì~ò~ù"; break;
    case "Tilde": msg1.value="Ã~Õ~Ñ ã~ñ~õ"; break;
    case "Caron": msg1.value="Č~Š~Ž č~š~ž"; break;
    case "Misc": msg1.value="Å~ẞ~Ø å~ß~ø ¿~?~¡~!"; break;
    default: break;
    }
    switch(value) {
    case "Ligatures": break;
    default: alphabetACTION(false); break;
    }
    switch(value) {
    case "Ligatures": alphabetACTION(true); break;
    case "LaRose": textLaRose(msg1); break;
    default: entryFORCE("1"); break;
    }
}
function fontACTION(font){
    var percent="78%";
    var size=135;
    switch(font) {
    case "Adorable": case "AdorableLight":
    case "Brave": case "BraveLight":
    case "Chic": case "ChicLight":
    case "Divine": case "DivineLight": break;
    case "Expressive": case "ExpressiveLight": percent="90%";  break;
    case "Festive": case "FestiveLight": break;
    case "Gallant": case "GallantLight":
    case "H": case "HLight":
    case "I": case "ILight":  percent="100%"; break;
    default: size=85; percent="110%";  break;
    }
    var obj=document.getElementById("sizeVALUE");
    var val=100+10*(parseInt(obj.innerHTML)-2);
    size = size*val/100;
    style("msg1TEXTAREA",percent,font,size);
    style("msg2TEXTAREA",percent,font,size);
    style("msg3TEXTAREA",percent,font,size);
    style("msg4TEXTAREA",percent,font,size);
    style("msg5TEXTAREA",percent,font,size);
    style("msg6TEXTAREA",percent,font,size);
    style("msg7TEXTAREA",percent,font,size);
    style("msg8TEXTAREA",percent,font,size);
    var obj=document.getElementById("textSELECT");
    if (obj.name=='predefined') {
        textACTION(obj.value);
    }
}
function fontFORCE(font){
    var obj=document.getElementById("fontSELECT");
    obj.value=font;
    fontACTION(font);
}
function sizeFORCE2(obj,size){
    obj.innerHTML=size.toString();
    var obj=document.getElementById("fontSELECT");
    fontACTION(obj.value);
}
function sizeFORCE(size){
    sizeFORCE2(document.getElementById("sizeVALUE"),size);
}
function sizePLUS(zobj,lo,hi) {
    var obj=document.getElementById("sizeVALUE");
    var val=parseInt(obj.innerHTML)+1;
    if (val<=hi) {
        sizeFORCE2(obj,val);
        if (val-1==lo) {
            obj=document.getElementById("minusSIZE");
            obj.disabled=false;
        }
    }
    zobj.disabled=(val>=hi);
}
function sizeMINUS(zobj,lo,hi) {
    var obj=document.getElementById("sizeVALUE");
    var val=parseInt(obj.innerHTML)-1;
    if (val>=lo) {
        sizeFORCE2(obj,val);
        if (val+1==hi) {
            obj=document.getElementById("plusSIZE");
            obj.disabled=false;
        }
    }
    zobj.disabled=(val<=lo);
}
function initMSG(id,text){
    var msg=document.getElementById(id);
    if (msg.value=="") msg.value=text;
    else msg.onfocus=null;
}

window.onload=function () {
    initMSG("msg1TEXTAREA","here…");
    initMSG("msg2TEXTAREA","here…");
    initMSG("msg3TEXTAREA","here…");
    initMSG("msg4TEXTAREA","here…");
    initMSG("msg5TEXTAREA","here…");
    initMSG("msg6TEXTAREA","here…");
    initMSG("msg7TEXTAREA","here…");
    initMSG("msg8TEXTAREA","here…");
    fontFORCE(document.getElementById("fontSELECT").value);
    entryFORCE(document.getElementById("entrySELECT").value);
    widthFORCE(parseInt(document.getElementById("widthVALUE").innerHTML));
}
