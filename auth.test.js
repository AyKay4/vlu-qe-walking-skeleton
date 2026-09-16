// Import hàm login từ file auth.js
const { login } = require('./auth');

describe('Kiểm thử chức năng đăng nhập (Unit Test)', () => {
  
  test('Trả về true khi nhập đúng admin và 123', () => {
    const result = login('admin', '123');
    expect(result).toBe(true);
  });

  test('Trả về false khi sai tên đăng nhập', () => {
    const result = login('wrongUser', '123');
    expect(result).toBe(false);
  });

  test('Trả về false khi sai mật khẩu', () => {
    const result = login('admin', 'wrongPass');
    expect(result).toBe(false);
  });

  test('Trả về false khi để trống cả hai trường', () => {
    const result = login('', '');
    expect(result).toBe(false);
  });

});
