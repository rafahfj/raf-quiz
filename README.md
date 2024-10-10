# Raf Quiz

## Deskripsi

Raf Quiz adalah sebuah website permainan trivia (quiz) singkat yang menyediakan berbagai kategori dan tingkat kesulitan pertanyaan. Pengguna dapat melakukan registrasi, memilih kategori, kesulitan, dan mengerjakan quiz dengan waktu yang terbatas. Setelah selesai, hasil quiz akan ditampilkan, mencakup jumlah jawaban benar, salah, dan detail pertanyaan yang sudah dijawab.

## Fitur

- Registrasi dan login pengguna dengan Firebase Authentication
- Pilihan kategori dan tingkat kesulitan quiz
- Sistem timer untuk membatasi waktu pengerjaan quiz
- Tampilan hasil quiz yang memuat jumlah jawaban benar dan salah
- Halaman konfirmasi sebelum memulai quiz
- User-friendly interface dengan animasi yang halus menggunakan Framer Motion

## Instalasi

Proyek ini tidak memerlukan instalasi lokal. Anda hanya perlu mengakses website melalui URL yang disediakan.

Namun, jika Anda ingin menjalankan proyek ini secara lokal:

1. Clone repository ini:
   ```bash
   git clone https://github.com/namauser/rafquiz.git
   ```
2. Masuk ke folder proyek:
   ```bash
   cd rafquiz
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Jalankan proyek:
   ```bash
   npm start
   ```

## Penggunaan

1. **Halaman Login dan Registrasi**:

   - Pada saat pertama kali mengunjungi website, pengguna akan diarahkan ke **halaman login**.
   - Jika pengguna belum memiliki akun, mereka harus mendaftar di **halaman registrasi** dengan mengisi nama, email, dan password.
   - Setelah registrasi, pengguna akan otomatis diarahkan kembali ke halaman login.
   - Setelah berhasil login, pengguna akan diarahkan ke halaman utama untuk memilih quiz.

2. **Memilih Kategori dan Kesulitan**:

   - Setelah login, pengguna akan dihadapkan dengan halaman yang meminta mereka untuk **memilih kategori** dan **tingkat kesulitan** (mudah, sedang, sulit) dari pertanyaan quiz yang akan dijawab.
   - Kategori dan tingkat kesulitan yang dipilih akan menentukan jenis pertanyaan yang akan diberikan.

3. **Halaman Konfirmasi**:

   - Setelah memilih kategori dan kesulitan, pengguna akan diarahkan ke **halaman konfirmasi**.
   - Di halaman ini, akan ditampilkan informasi mengenai:
     - **Jumlah soal** yang akan disajikan.
     - **Kategori** dan **tingkat kesulitan** yang dipilih.
     - **Waktu** yang diberikan untuk menyelesaikan quiz (dengan sistem timer).
   - Pengguna dapat meninjau kembali pilihannya sebelum memulai quiz. Jika sudah siap, pengguna bisa mengklik tombol **"Start"** untuk memulai quiz.

4. **Mengisi Quiz**:

   - Setelah mengklik "Start", quiz akan dimulai dan pengguna akan diberikan pertanyaan sesuai dengan kategori dan kesulitan yang dipilih.
   - **Timer** akan terlihat di bagian atas layar, menunjukkan sisa waktu yang dimiliki untuk menyelesaikan quiz.
   - Pengguna harus menjawab semua soal dalam batas waktu yang ditentukan. Jika waktu habis, quiz akan otomatis berakhir.

5. **Hasil Quiz**:

   - Setelah menjawab semua pertanyaan atau setelah waktu habis, pengguna akan diarahkan ke **halaman hasil**.
   - Di halaman hasil, pengguna dapat melihat:
     - **Jumlah jawaban yang benar** dan **jumlah jawaban yang salah**.
     - **Soal-soal yang sudah dijawab** sebelumnya beserta jawaban yang diberikan.
   - Pengguna dapat memilih untuk memulai quiz baru dengan kategori dan kesulitan yang berbeda atau kembali ke halaman utama.

6. **Logout**:
   - Pengguna dapat melakukan **logout** dari aplikasi dengan mengklik tombol **logout** di menu navigasi, yang akan mengembalikan pengguna ke halaman login.

## Teknologi yang Digunakan

- **ReactJS**: Digunakan sebagai framework utama.
- **TailwindCSS**: Styling responsif dan cepat.
- **Firebase**: Digunakan untuk sistem otentikasi pengguna.
- **React Router DOM**: Merutekan halaman dalam aplikasi.
- **Framer Motion**: Animasi yang halus dan responsif untuk user experience.

## Kontribusi

Kami sangat menghargai kontribusi dari pengembang lain. Jika Anda tertarik untuk berkontribusi:

1. Fork repository ini.
2. Buat branch baru (`git checkout -b fitur-baru`).
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4. Push ke branch (`git push origin fitur-baru`).
5. Ajukan pull request.
