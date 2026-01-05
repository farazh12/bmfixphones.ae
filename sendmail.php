<?php

$subject = "Contact Enquiry ";

$first_name = htmlspecialchars($_POST['first_name']);
    $phone  = htmlspecialchars($_POST['phone']);
    $email  = htmlspecialchars($_POST['email']);
    $device  = htmlspecialchars($_POST['device']);
    $message  = htmlspecialchars($_POST['message']);

$msg = '
<div style="background-color: #ffffff; margin: 0;">
    <div>
        <table align="center" width="600" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td style="padding: 0 45px; background-color: #ebeff3;">
                        <table style="width:100%">
                            <tbody>
                                <tr>
                                    <td style="padding: 0px 0; text-align: center;">
                                       <img src="https://bmfixphones.ae/assets/logo-header-color-DSdCrlEa.png" style="width:150px;" alt="BMFixPhones Logo" class="h-28 w-auto">
                                                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;">

                                        
                                        <div style="height: 1px; border-bottom: solid 1px #cdd8df;"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="font: 600 15px \'Open Sans\', sans-serif; color: #4a4a4a; margin: 50px 0 0 0;">Hi,</p>
                                        <p style="font: 600 15px \'Open Sans\', sans-serif; color: #4a4a4a; margin: 30px 0 0 0; line-height: 25px;">
                                            You have received an enquiry.

                                        </p>
                                        <table cellpadding="10" cellspacing="0" border="0" style="width:100%">
                                            <tr>
                                                <td>Date</td>
                                                <td>'.date("d-m-Y h:i A").'</td>
                                            </tr>
                                            <tr>
                                                <td>Name</td>
                                                <td>'.$first_name.'</td>
                                            </tr>
                                            <tr>
                                                <td>Phone</td>
                                                <td>'.$phone.'</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>'.$email.'</td>
                                            </tr>
                                            <tr>
                                                <td>Device</td>
                                                <td>'.$device.'</td>
                                            </tr>
                                            <tr>
                                                <td>Message</td>
                                                <td>'.$message.'</td>
                                            </tr>
                                            
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 5px;">
                                        <p style="font: 600 15px \'Open Sans\', sans-serif; color: #4a4a4a; margin: 30px 0 45px 0; line-height: 27px;">
                                            Regards,<br />
                                             Baitul Madina Mobile Phones
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="yj6qo"></div>
        <div class="adL"></div>
    </div>
    <div class="adL"></div>
</div>';

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From:  Baitul Madina Mobile Phones  <enquiry@bmfixphones.ae>" . "\r\n";
$headers .= "Reply-To: ".$email . "\r\n";

$to ='enquiry@bmfixphones.ae';
// Send email
if (mail($to, $subject, $msg, $headers)) {
    echo "success";
} else {
   echo "Something went wrong. Please try again.";
}
?>