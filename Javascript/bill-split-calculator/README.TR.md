
---

# Bill Split Calculator 💰 (Türkçe)

Bu proje, JavaScript ile yapılmış basit bir Hesap Bölme uygulamasıdır. Her kişinin ne kadar ödemesi gerektiğini, bahşiş yüzdesi dahil, hesaplamaya yarar. JavaScript’te temel matematik işlemleri, input alma ve çıktıyı formatlama pratiği için ideal.

## 📌 Özellikler

- Hesap tutarına göre bahşiş miktarını hesaplar  
- Bahşişi toplam hesaba ekler  
- Toplam miktarı kişi sayısına böler  
- Toplam ve kişi başı ödemeyi çıktı olarak verir  

## 🧠 Mantık

1. Üç girdi alır:  
   - Hesap tutarı (`billAmount`)  
   - Bahşiş yüzdesi (`tipPercentage`)  
   - Kişi sayısı (`numPeople`)  
2. Bahşişi hesaplar: `(tipPercentage / 100) * billAmount`  
3. Bahşişi toplam hesaba ekler: `totalWithTip = billAmount + tipAmount`  
4. Toplamı kişi sayısına böler: `perPerson = totalWithTip / numPeople`  
5. Sonuçları ekrana yazdırır  

## ▶️ Örnek

Girdi:  
100
15
4

Çıktı:  
Bill Split Calculator
Total (including tip): $115
Each person pays: $28.75

## ⚙️ Kullanım

```bash
node index.js