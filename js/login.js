document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // التحقق من إدخال الحقول
  if (!username || !password) {
      alert('❌ يرجى ملء جميع الحقول.');
      return;
  }

  // جلب بيانات المستخدمين المخزنة محليًا من `signup.html`
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // البحث عن المستخدم في البيانات المخزنة محليًا
  let existingUser = users.find(user => user.username === username && user.password === password);

  if (existingUser) {
      localStorage.setItem('currentUser', JSON.stringify(existingUser)); // تخزين بيانات المستخدم الحالي
      alert('✅ تم تسجيل الدخول بنجاح!');
      window.location.href = 'index.html'; // إعادة توجيه المستخدم للصفحة الرئيسية
      return;
  }

  // التحقق من `FakeStore API` إذا لم يكن المستخدم مسجلاً محليًا
  const checkAPIForUser = async () => {
      try {
          let response = await fetch('https://fakestoreapi.com/users');
          if (!response.ok) {
              throw new Error('⚠️ خطأ في الاتصال بالخادم.');
          }
          let apiUsers = await response.json();

          // البحث عن المستخدم في API
          let userFound = apiUsers.find(user => user.username === username && user.password === password);

          if (userFound) {
              localStorage.setItem('currentUser', JSON.stringify(userFound)); // تخزين بيانات المستخدم
              alert('✅ تم تسجيل الدخول بنجاح عبر API!');
              window.location.href = 'index.html';
          } else {
              alert('❌ اسم المستخدم أو كلمة المرور غير صحيحة.');
          }
      } catch (error) {
          console.error('⚠️ خطأ أثناء تسجيل الدخول:', error);
          alert('⚠️ حدث خطأ: ' + error.message);
      }
  };

  checkAPIForUser(); // التحقق من API
});
