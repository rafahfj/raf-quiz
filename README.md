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

1. Pada halaman pertama, pengguna akan diminta untuk login. Jika ini pertama kalinya pengguna mengakses Raf Quiz, mereka harus registrasi terlebih dahulu.
2. Setelah login berhasil, pengguna akan diarahkan ke halaman pemilihan kategori dan tingkat kesulitan quiz.
3. Pengguna kemudian akan menerima halaman konfirmasi yang memuat informasi jumlah soal, kategori, kesulitan, dan waktu yang diberikan.
4. Setelah klik "Start", quiz akan dimulai dengan sistem timer. Jika waktu habis, quiz akan otomatis berakhir.
5. Di akhir quiz, hasil akan ditampilkan, termasuk jumlah benar, salah, dan detail pertanyaan yang dijawab.

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

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.

```

README ini mencakup informasi dasar seperti deskripsi proyek, fitur, teknologi yang digunakan, cara instalasi, dan penggunaan, serta cara kontribusi dan lisensi proyek. Jika ada tambahan informasi lain yang ingin ditambahkan, silakan beri tahu!
```
