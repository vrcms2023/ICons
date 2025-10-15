# import smtplib

# smtp_server = "smtp.office365.com"
# port = 587
# sender = "test12345@iconsengg.com"
# password = "mmrqwjtnnpkghxpc"
# receiver = "designerkrishna@gmail.com"

# try:
#     server = smtplib.SMTP(smtp_server, port)
#     server.starttls()
#     server.login(sender, password)
#     server.sendmail(sender, receiver, "Subject: Test Email\n\nThis is a test email from GoDaddy cPanel terminal.")
#     print("✅ Email sent successfully!")
#     server.quit()
# except Exception as e:
#     print("❌ Error:", e)



import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Email details
sender = "test12345@iconsengg.com"
recipient = "designerkrishna@gmail.com"
subject = "Test Email from Python on GoDaddy Hosting"
body = "This is a test email sent using Python smtplib without SMTP authentication."

# Create the message
msg = MIMEMultipart()
msg["From"] = sender
msg["To"] = recipient
msg["Subject"] = subject
msg.attach(MIMEText(body, "plain"))

try:
    # Connect to GoDaddy's local relay (no SSL, no auth)
    with smtplib.SMTP("localhost", 25) as server:
        server.sendmail(sender, recipient, msg.as_string())

    print("Email sent successfully!")

except Exception as e:
    print("Error:", e)

