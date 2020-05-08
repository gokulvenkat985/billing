    jQuery(document).ready( function () {
        $("#append").click( function(e) {
          e.preventDefault();
          let countNew = $('#count').val();
        $("#inc").append('<div class="col-lg-6">\
               <div class="row">\
                  <div class="col-lg-2">\
                     <div class="form-group">\
                        <input type="button" class="btn btn-primary" id="usr" value="Component" style="background-color:white;color:#008ae6; border-color: grey !important;font-size: 9px;">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <div class="form-check">\
                        <input type="checkbox" id="ck_'+countNew+'" class="form-check-input" value="">\
                     </div>\
                  </div>\
                  <div  class="col-lg-4">\
                     <div class="form-group">\
                        <select class="form-control" id="select_array_'+countNew+'" name="sellist1">\
                        </select>\
                     </div>\
                  </div>\
                  <div  class="col-lg-5">\
                     <div class="form-group">\
                        <input name="textbox" type="text" class="form-control" id="desc_'+countNew+'">\
                     </div>\
                  </div>\
               </div>\
            </div>\
            <div class="col-lg-6">\
               <div class="row">\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="qty_'+countNew+'" onkeyup="calculate_price(this.id);calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="cost_'+countNew+'" onkeyup="calculate_price(this.id);calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="gst_'+countNew+'" onkeyup="calculate_price(this.id);calc_total()" value="0">\
                         <input type="hidden" class="form-control" id="gst_hid_'+countNew+'" value="0">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="tot_'+countNew+'" readonly>\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="adj_'+countNew+'">\
                     </div>\
                  </div>\
                  <div class="col-1">\
                     <div class="form-check">\
                        <input type="checkbox" class="form-check-input" value="" id="set_'+countNew+'">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <i class="fa fa-trash remove_this" aria-hidden="true"></i>\
                  </div>\
               </div>\
            </div>\
           ');
        
        
          var options =
[
  {
    "text"  : "IP14-Mens Bobby Polo Shirt-4 Colors",
    "value" : "IP14-Mens Bobby Polo Shirt-4 Colors"
  },
  {
    "text"     : "IP15-Womens Bobby Polo Shirt-4 Colors",
    "value"    : "IP15-Womens Bobby Polo Shirt-4 Colors",
    "selected" : true
  },
  {
    "text"  : "IP17-Gens  Polo Shirt-4 Colors",
    "value" : "IP17-Gens  Polo Shirt-4 Colors"
  },
  {
    "text"  : "IP18-Womens  Polo Shirt-4 Colors",
    "value" : "IP18-Womens  Polo Shirt-4 Colors"
  }
];

var selectBox = document.getElementById('select_array_'+countNew+'');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}
let countAdd;
                countAdd = parseInt(countNew)+1;

                $('#count').val(countAdd);
                return false;
});

    jQuery(document).on('click', '.remove_this', function() {
          
        var closestRow = $(this).closest('.col-lg-6');
        closestRow.add(closestRow.prev()).remove();
        return false;
        });
  });





 $(window).on('load', function () {
   // console.log("window loaded");
   // alert('load');
        // for(var loop=2;loop<5;loop++){
        $("#inc").append('<div class="col-lg-6">\
               <div class="row">\
                  <div class="col-lg-2">\
                     <div class="form-group">\
                        <input type="button" class="btn btn-primary" id="usr" value="Component" style="background-color:white;color:#008ae6; border-color: grey !important;font-size: 9px;">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <div class="form-check">\
                        <input type="checkbox" class="form-check-input" value="" id="ck_2">\
                     </div>\
                  </div>\
                  <div  class="col-lg-4">\
                     <div class="form-group">\
                        <select class="form-control" id="select_array_2" name="sellist1">\
                        </select>\
                     </div>\
                  </div>\
                  <div  class="col-lg-5">\
                     <div class="form-group">\
                        <input name="textbox" type="text" class="form-control" value="Miami Pen-1 Pos Laser Engraved" id="desc_2">\
                     </div>\
                  </div>\
               </div>\
            </div>\
            <div class="col-lg-6">\
               <div class="row">\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" value="250" class="form-control" id="qty_2" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="cost_2" value="0.87" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="gst_2" value="1.30" onkeyup="calc_total()">\
                        <input type="hidden" class="form-control" id="gst_hid_2" value="108" >\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" value="325.0" readonly id="tot_2">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="adj_2">\
                     </div>\
                  </div>\
                  <div class="col-1">\
                     <div class="form-check">\
                        <input type="checkbox" class="form-check-input" value="" id="set_2">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <i class="fa fa-trash remove_this" aria-hidden="true"></i>\
                  </div>\
               </div>\
            </div>\
            <div class="col-lg-6">\
               <div class="row">\
                  <div class="col-lg-2">\
                     <div class="form-group">\
                        <input type="button" class="btn btn-primary" id="usr" value="Component" style="background-color:white;color:#008ae6; border-color: grey !important;font-size: 9px;">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <div class="form-check">\
                        <input type="checkbox" class="form-check-input" value="" id="ck_3"> \
                     </div>\
                  </div>\
                  <div  class="col-lg-4">\
                     <div class="form-group">\
                        <select class="form-control" id="select_array_3" name="sellist1">\
                        </select>\
                     </div>\
                  </div>\
                  <div  class="col-lg-5">\
                     <div class="form-group">\
                        <input name="textbox" type="text" class="form-control" value="Thermo Bottle drink with laser Era" id="desc_3">\
                     </div>\
                  </div>\
               </div>\
            </div>\
            <div class="col-lg-6">\
               <div class="row">\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="qty_3" value="100" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="cost_3" value="5.40" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="gst_3" value="8.10" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="tot_3" value="810.00" readonly>\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="adj_3">\
                     </div>\
                  </div>\
                  <div class="col-1">\
                     <div class="form-check">\
                        <input type="checkbox" class="form-check-input" value="" id="set_3">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <i class="fa fa-trash remove_this" aria-hidden="true"></i>\
                  </div>\
               </div>\
            </div>\
            <div class="col-lg-6">\
               <div class="row">\
                  <div class="col-lg-2">\
                     <div class="form-group">\
                        <input type="button" class="btn btn-primary" id="usr" value="Component" style="background-color:white;color:#008ae6; border-color: grey !important;font-size: 9px;">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <div class="form-check">\
                        <input type="checkbox" id="ck_4"class="form-check-input" value="">\
                     </div>\
                  </div>\
                  <div  class="col-lg-4">\
                     <div class="form-group">\
                        <select class="form-control" id="select_array_4" name="sellist1">\
                        </select>\
                     </div>\
                  </div>\
                  <div  class="col-lg-5">\
                     <div class="form-group">\
                        <input name="textbox" type="text" class="form-control" id="desc_4" value="Thermo Drink Bottle With laser engra">\
                     </div>\
                  </div>\
               </div>\
            </div>\
            <div class="col-lg-6">\
               <div class="row">\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="qty_4" value="250" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="cost_4" value="5.15" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="gst_4" value="7.75" onkeyup="calc_total()">\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="tot_4" value="1937.50" readonly>\
                     </div>\
                  </div>\
                  <div class="col-2">\
                     <div class="form-group">\
                        <input type="text" class="form-control" id="adj_4">\
                     </div>\
                  </div>\
                  <div class="col-1">\
                     <div class="form-check">\
                        <input type="checkbox" class="form-check-input" value="" id="set_4">\
                     </div>\
                  </div>\
                  <div class="col-lg-1">\
                     <i class="fa fa-trash remove_this" aria-hidden="true"></i>\
                  </div>\
               </div>\
            </div>\
            <input type="hidden" class="form-control" id="gst_hid_3" value="108" ><input type="hidden" class="form-control" id="gst_hid_4" value="108" >\
            ');
for(var loop=2 ; loop<5;loop++){
    var options =
[
  {
    "text"  : "IP14-Mens Bobby Polo Shirt-4 Colors",
    "value" : "IP14-Mens Bobby Polo Shirt-4 Colors"
  },
  {
    "text"     : "IP15-Womens Bobby Polo Shirt-4 Colors",
    "value"    : "IP15-Womens Bobby Polo Shirt-4 Colors",
    "selected" : true
  },
  {
    "text"  : "IP17-Gens  Polo Shirt-4 Colors",
    "value" : "IP17-Gens  Polo Shirt-4 Colors"
  },
  {
    "text"  : "IP18-Womens  Polo Shirt-4 Colors",
    "value" : "IP18-Womens  Polo Shirt-4 Colors"
  }
];

var selectBox = document.getElementById('select_array_'+loop+'');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}        
}

        return false;
  });

  var options =
[
  {
    "text"  : "Get packed,New South Wales.Foresville",
    "value" : "Get packed,New South Wales.Foresville"
  },
  {
    "text"     : "Get packed,Walmart",
    "value"    : "Get packed,Walmart",
    "selected" : true
  },
  {
    "text"  : "Get packed,State Farm",
    "value" : "Get packed,State Farm"
  },
  {
    "text"  : "Get packed,Alphabet",
    "value" : "Get packed,Alphabet"
  },
  {
    "text"  : "Get packed,Ford",
    "value" : "Get packed,Ford"
  },
  {
    "text"  : "Get packed,Apple",
    "value" : "Get packed,Apple"
  },
  {
    "text"  : "Get packed,ExxonMobil",
    "value" : "Get packed,ExxonMobil"
  },
  {
    "text"  : "Get packed,UnitedHealth Group",
    "value" : "Get packed,UnitedHealth Group"
  },
  {
    "text"  : "Get packed,CVS Health",
    "value" : "Get packed,CVS Health"
  }
];

var selectBox = document.getElementById('select_box_array1');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}
  var options =
[
  {
    "text"  : "David Hoefnagels,Get Packed",
    "value" : "David Hoefnagels,Get Packed"
  },
  {
    "text"     : "Olivia,Get Packed",
    "value"    : "Olivia,Get Packed",
    "selected" : true
  },
  {
    "text"  : "Esperanza,Get Packed",
    "value" : "Esperanza,Get Packed"
  },
  {
    "text"  : "Chandler,Get Packed",
    "value" : "Chandler,Get Packed"
  },
  {
    "text"  : "Aadhya,Get Packed",
    "value" : "Aadhya,Get Packed"
  },
  {
    "text"  : "Ramona,Get Packed",
    "value" : "Ramona,Get Packed"
  },
  {
    "text"  : "Harleigh,Get Packed",
    "value" : "Harleigh,Get Packed"
  },
  {
    "text"  : "Paloma,Get Packed",
    "value" : "Paloma,Get Packed"
  },
  {
    "text"  : "Frankie,Get Packed",
    "value" : "Frankie,Get Packed"
  },
  {
    "text"  : "Moriah,Get Packed",
    "value" : "Moriah,Get Packed"
  }
];

var selectBox = document.getElementById('select_box_array2');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}
  var options =
[
  {
    "text"  : "Initial Quote",
    "value" : "Initial Quote"
  },
  {
    "text"     : "Quote Send",
    "value"    : "Quote Send",
    "selected" : true
  },
  {
    "text"  : "Waiting for payment",
    "value" : "Waiting for payment"
  },
  {
    "text"  : "Completed",
    "value" : "Completed"
  },
  
];

var selectBox = document.getElementById('select_box_array3');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}
  var options =
[
  {
    "text"  : "SS-Steve Smith",
    "value" : "SS-Steve Smith"
  },
  {
    "text"     : "Camdyn",
    "value"    : "Camdyn",
    "selected" : true
  },
  {
    "text"  : "Aydin",
    "value" : "Aydin"
  },
  {
    "text"  : "Mayson",
    "value" : "Mayson"
  },
  {
    "text"  : "Jonathon",
    "value" : "Jonathon"
  },
  {
    "text"  : "Cristiano",
    "value" : "Cristiano"
  },
  {
    "text"  : "Darian",
    "value" : "Darian"
  },
   {
    "text"  : "Mayson",
    "value" : "Mayson"
  }
];

var selectBox = document.getElementById('select_box_array4');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}
     var options =
[
  {
    "text"  : "IP14-Mens Bobby Polo Shirt-4 Colors",
    "value" : "IP14-Mens Bobby Polo Shirt-4 Colors"
  },
  {
    "text"     : "IP15-Womens Bobby Polo Shirt-4 Colors",
    "value"    : "IP15-Womens Bobby Polo Shirt-4 Colors",
    "selected" : true
  },
  {
    "text"  : "IP17-Gens  Polo Shirt-4 Colors",
    "value" : "IP17-Gens  Polo Shirt-4 Colors"
  },
  {
    "text"  : "IP18-Womens  Polo Shirt-4 Colors",
    "value" : "IP18-Womens  Polo Shirt-4 Colors"
  }
];

var selectBox = document.getElementById('select_array_1');

for(var i = 0, l = options.length; i < l; i++){
  var option = options[i];
  selectBox.options.add( new Option(option.text, option.value, option.selected) );
}

  // time format


  function calcTime(city, offset) {

    d = new Date();

    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000*offset));

  document.getElementById('time').innerHTML=nd.toLocaleString();

    return "The local time in " + city + " is " + nd.toLocaleString();

}
console.log(calcTime('New York', '-4'))
// quote random number

var val = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('quoteno').innerHTML=val;
//calculation for static data

  setTimeout(function(){

   $("input").keyup(function(){
    var combined = 0;
    var split_fun = $(this).attr('id');
    combined = parseInt(split_fun.split('_')[1]);
    // console.log(combined);

    var price=$('#qty_'+combined).val();
    var cost = $('#cost_'+combined).val();
    var gst = $('#gst_'+combined).val();
    // console.log(price+cost+gst);

    if(gst!=null){
      var int_price = price*cost;
      // console.log(int_price);
      var inc_gst = int_price * gst/100;      
      // console.log(inc_gst);
      var total_price = int_price + inc_gst;
      // console.log(total_price);
      
      $('#tot_'+combined).val(total_price);
      $('#gst_hid_'+combined).val(inc_gst);
    }
}); 
 }, 2000);

</script>
<script type="text/javascript">
function calculate_price(value){
  var id_value = value;
   id_split=parseInt(id_value.split('_')[1]);
  var price = document.getElementById('qty_'+id_split).value;
  var cost = document.getElementById('cost_'+id_split).value;
  var gst = document.getElementById('gst_'+id_split).value;

if(gst != null){
      var int_price = price*cost;
      var inc_gst = int_price * gst/100;      
      var total_price = int_price + inc_gst;
       $('#tot_'+id_split).val(total_price);
       $('#gst_hid_'+id_split).val(inc_gst);
    }
    else{
      var int_price = price*cost;
      
       $('#tot_'+id_split).val(total_price);
    }
}
// =====================Total card area price tag===================
function calc_total(){
  setTimeout(function(){ 
  var val=document.getElementById('count').value;
  console.log(val);
  

  val=val-1;
// ==========================totalamouunt====================================
var array_tot=[];
  for(var i=1;i<=val;i++){
    // console.log(i);
    var tot_pri =document.getElementById('tot_'+i).value;
        array_tot.push(parseInt(tot_pri));
  }
   var sum = array_tot.reduce(function(a, b){
        return a + b;
    }, 0);
   console.log("sum"+sum);
   document.getElementById('total').innerHTML='$'+sum;
  console.log(array_tot);
// ==================gsttotalamount========================================
var array_gst=[];
for(var s=1 ; s<=val;s++){
  var tot_gst =document.getElementById('gst_hid_'+s).value;
  array_gst.push(parseInt(tot_gst));
}
var sum_gst = array_gst.reduce(function(a, b){
        return a + b;
    }, 0);
console.log(array_gst);
document.getElementById('total_gst').innerHTML='$'+sum_gst;
console.log(sum_gst);

// =============================gstpercentage================================
  var array_gst_rate=[];
  for(var m=1;m<=val;m++){
    // console.log(i);
    var tot_gst_rate =document.getElementById('gst_'+m).value;
        array_gst_rate.push(parseInt(tot_gst_rate));
  }
   var sum_gst_rate = array_gst_rate.reduce(function(a, b){
        return a + b;
    }, 0);
   console.log("sum"+array_gst_rate);
   document.getElementById('gst_value').innerHTML='$'+sum_gst_rate;
  console.log(sum_gst_rate);


}, 100);
}

