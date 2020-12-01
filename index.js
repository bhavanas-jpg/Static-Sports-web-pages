$().ready(function(){
 $("#commentForm").validate({
   rules:{
   sports:{
     required:true,

   },
   name:{
     required:true,
     minlength:10
   },
   email:{
     required:true,
     email:true
    },
    phone:"required",
   },
    messages: {
      sports:"This field is required",
      name:"This field is required",
       phone:"This field is required",
       email:"This field is required",
  
    }   
   });
});





























// $(function () {
//     var $regForm = $("#jqform");
//     $.validator.addMethod(
//       "noSpace",
//       function (value, Element) {
//         return value == "" || value.trim().length != 0;
//       },
//       "Spaces are not allowed"
//     );
//     $.validator.addMethod(
//       "EMAIL",
//       function (value, element) {
//         return (
//           this.optional(element) ||
//           /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value)
//         );
//       },
//       "Email Address is invalid: Please enter a valid email address."
//     );
//     $.validator.addMethod(
//       "Number",
//       function (value, element) {
//         return this.optional(element) || /^[0-9.-]$/i.test(value);
//       },
//       "Characters are not allowed."
//     );
//     if ($regForm.length) {
//       $regForm.validate({
//         rules: {
//           funame: {
//             required: true,
//             noSpace: true,
//           },
          
//           mail: {
//             required: true,
//             email: true,
//             EMAIL: true,
//           },
         
//         },
//         messages: {
//           funame: {
//             required: "*Enter your full name",
//           },
         
//           mail: {
//             required: "*Enter Your Mail-Id",
//           },
          
         
//         },
//       });
//     }
//   });