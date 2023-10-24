
# Course Project

## Hướng dẫn cài đặt và vận hành website đồ án

### Bước 0: Chuẩn bị môi trường
#### Cài đặt Maven: 
Đảm bảo quý thầy/cô đã cài đặt Maven. Nếu chưa, quý thầy/cô hãy cài đặt từ trang web chính thức của Apache Maven: https://maven.apache.org/download.cgi

Mở Terminal (hoặc Command Prompt trên Windows)

Gõ mvn install

#### Cài JAVA_HOME
Cài đặt Java SE Development Kit 17 từ https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html

Mở hộp thoại System Environment Variables bằng cách tìm kiếm environment trong mục tìm kiếm của windows. Chọn vào Edit the system environment variables

Sau khi hộp thoại System Properties  hiển thị lên, chọn vào Environment Variables.

Tạo biến môi trường JAVA_HOME bằng cách chọn vào New trong mục System Variable và điền thông tin.

Sau khi hộp thoại chỉnh sửa Path được mở lên, di chuyển đến dòng rỗng cuối cùng và thêm vào %JAVA_HOME%\bin.

Dấu phần trăm trong Windows biết rằng nó tham chiếu đến một biến – JAVA_HOME, và \ bin chỉ định vị trí của java.exe và javac.exe được sử dụng để chạy và biên dịch các chương trình Java, cũng như các công cụ khác trong JDK.

Nhấp vào nút OK để đóng tất cả các hộp thoại.

#### Cài đặt Node.js và npm
Hãy đảm bảo rằng đã cài đặt Node.js và npm. Có thể tải xuống và cài đặt từ trang web chính thức của Node.js: https://nodejs.org/en/download/current
### Bước 1: Sao lưu file backup đi kèm.
### Bước 2: Chạy project apiroy (đây là server, hãy đảm bảo nó luôn chạy khi dùng website)

mở project apiroy, vào application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/roy-project
spring.datasource.username=root
spring.datasource.password=123abc!!!

Hãy chỉnh sửa password ở phần này thành mật khẩu của tài khoản MySQL trên mấy quý thầy/cô. Sau đó lưu lại và khởi chạy dự án.
### Bước 3: Chạy project website.
Sử dụng Command Prompt hoặc Terminal gõ cd website.
Gõ npm install để cài đặt tất cả các phụ thuộc cần thiết.
Sau khi cài đặt thành công gõ npm start.


#### Các tài khoản:
##### Tài khoản role user:
email: "hyhyne@gmail.com
password: 123456
##### Tài khoản role admin:
email: admin12@gmail.com
password: "123456
