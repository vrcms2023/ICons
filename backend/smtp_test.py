import smtplib

server = "localhost"
port = 25

print(f"Trying to connect to {server}:{port}...")

try:
    with smtplib.SMTP(server, port, timeout=10) as smtp:
        print("✅ Connected:", smtp.noop())
except Exception as e:
    print("❌ Connection failed:", e)