# Price Control App UI

Bu proje, React öğreniminizi pekiştirmek ve çeşitli kütüphaneleri kullanmayı öğrenmek için oluşturulmuştur.

## Proje Hakkında

Price Control App, UI ve API olmak üzere iki ayrı projeden oluşur. Ve iki projede tarafımca oluşturulmuştur. Bu projeler birbiriyle entegre çalışır ve bir veritabanına ihtiyaç duyarlar. Projeyi çalıştırabilmek için gerekli bağımlılıkları yüklemelisiniz.

Bu projede aşağıdaki teknolojiler kullanılmıştır:

Frontend :
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Redux Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Router Dom](https://reactrouter.com/)
- [React Material UI](https://mui.com/)

Backend:
- [Node JS](https://nodejs.org/tr)
- [Selenium](https://www.npmjs.com/package/selenium-webdriver)
- [Sql](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)
 

## Proje Açıklaması

Projenin temel amacı, belirli bir ürünün fiyatlarını bir fiyat takip sitesinden izlemektir. Ürün, belirlenen bir fiyatın altına düştüğünde, yöneticiye bildirim gönderilir. 
Kısacası, bu uygulama, ürün fiyatlarını çeşitli fiyat karşılaştırma sitelerinde (örneğin Akakçe, Cimri vb.) izlemek için kullanılır.

Veriler, Node.js'de bulunan SELENIUM kütüphanesi kullanılarak, belirli bir fiyat takip sitesinin HTML yapısından çekilir. Price Control App UI, bu verileri Price Control App API projesinden alır.

Price Control App API projesinin kaynak kodları da bu (https://github.com/caneersahin/priceControlAppAPI.git) içinde bulunmaktadır.

## Katkıda Bulunma

Eğer projeye katkıda bulunmak isterseniz, lütfen benimle iletişime geçin.
