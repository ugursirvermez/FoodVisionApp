# FoodVisionApp
PyTorch_Education eğitiminde geliştirdiğim FoodVision modelinin React Native'de geliştirilmiş uygulaması burada yer almaktadır. 
## ReactNative Bölümünü Geliştirme
Amacım, eğitimde yapmış olduğum yüklenen yiyeceğin hangi yiyecek olduğunu tahmin eden bir makine öğrenmesi geliştirmekti. Bu projeyi mobil bir uygulama olarak görmek istedim. Uygulamayı tasarlamak biraz zahmetli oldu ama en son, en kolay yöntemle tamamlayabildim. Modeli çalıştırmak için denediğim işlemler şu şekilde:
- İlk başta PlayTorch ile çalıştırmak istedim ancak PyTorch tarafından desteği kesilmiş ve uygulama yüklenemiyor. Bu nedenle modeli mobil uygulama üzerinden canlı yükleme ihtimali ortadan kalktı.
- ExecuTorch denilen eklentisi vardı. Ancak bu kütüphane ise Swift'te bile stabil çalışmıyor. Ardından başka bir arayüz ile tasarlamayı denedim.
- HuggingFace'in API'lerinden bazıları sadece Browser'lar üzerinden çalışıyor ve uygulama olarak yapmanın bir anlamı kalmıyor. Daha özgün bir arayüz ile yapmak istedim.
- Gradio API'si ile uygulamayı geliştirmeyi denedim fakat Gradio Client'i maalesef JavaScript kısmında hatalar veriyor. Node.js'yi defalarca kez güncelledim ve içerisine fs/promises kütüphanesini eklememe rağmen Gradio kütüphaneyi import edemedi En çok üzerinde çalıştığım bu oldu ama maalesef istenilen çıktıyı vermedi.
- Son olarak Modal kullanarak uygulama dışına çıkmadan AppBrowser yapmayı denedim. Uygulamanın aslında yaptığı tek şey, bir Modal ekranında web sayfasını açıp, web sayfa FoodVision101 olarak oluşturduğum uygulamaya bağlanıyor. Gradio arayüzü mobile uyumlu olduğu için (doğal olarak) sorunsuz çalışıyor.
- Uygulamanın arayüzü ile ilgili görseller aşağıda yer almaktadır. (Not: Freepik'ten bulduğum arkaplan resimlerini kullandım. Lisans için bir şey yazmadım)
<img width="309" alt="res1" src="https://github.com/user-attachments/assets/52bbe32f-c318-4ac0-be3e-4c2e75589088" />
<img width="308" alt="res2" src="https://github.com/user-attachments/assets/d6c62d64-3c64-4b4f-b78f-a4aa208e0b1b" />
<img width="309" alt="res3" src="https://github.com/user-attachments/assets/4da354af-49c5-4b7e-8f7b-0981b35de858" />

## FoodVision Modelini Geliştirme
Daha önceden belirttiğim gibi PyTorch_Education adlı eğitim repomda son olarak geliştirdiğim FoodVision modelini kullandım. FoodVision'ın amacı, yüklenen yiyeceğin hangi yiyecek olduğunu tahmin eden bir Vision aslında. 101 etiketi bulunmaktadır. Model hakkında bilgi almak için linkteki dosyaları inceleyebilirsiniz. 
- [FoodVision Repo Dosyası](https://github.com/ugursirvermez/PyTorch_Education/tree/main/FoodVision101)

İlk olarak modeli geliştirdiğim zaman eğitim modeli 5 döngüden oluşuyordu. 5 devir ile oluşan model çok fazla yanlış tahmin yapıyordu. Modelin 5 devirli eğitim sonucunu aşağıdaki grafikten görebilirsiniz:
![foodvision](https://github.com/user-attachments/assets/8eeda127-6b07-4b2e-a787-41ca6f759caa)

Görüldüğü üzere test ve training eğrileri birbirinden oldukça uzak. Bende Google Colab Pro satın aldım ve modeli biraz daha eğitmeye karar verdim. Modeli 200 devirlik bir eğitime sokarsam eğrilerin birbirlerine yakınlaşacağını düşündüm. Modelin ilgili dosyasını tekrar güncellemiş oldum. Dolayısıyla sonuç grafiği aşağıdaki gibi oldu:

Model bir önceki versiyondan daha iyi çalışıyor ve daha doğru çıktılar veriyor. Ayrıca etiket sayısı 101'den oluşuyor. Yani "bütün" yiyecekleri bilmesi zaten imkansız fakat yakın tahminleri oluşturabiliyor. Dahası, hızlı yanıtlar veriyor. İlk geliştirdiğim modelin mobil uygulamasını yapabilmek keyifliydi. Build çıktılarını almadım çünkü bu repo diğerleri gibi eğitim amaçlıdır. Herhangi bir yerde izinsiz yayınlanması yasaktır. Teşekkürler :)
