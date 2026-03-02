"use client";

export default function AuthBlock({ user }: { user?: { login: string, role: string } }) {
  if (!user) {
    return (
      <div className="dropdown text-end">
        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
          <img src="https://cdn-icons-png.flaticon.com/512/3276/3276580.png" alt="mdo" className="rounded-curcle" width="42" height="42" />
        </a>
        <div className="dropdown-menu text-small p-3 shadow" style={{ minWidth: '250px' }}>
          <form action="/api/auth" method="POST">
            <legend className="fs-6">Авторизация</legend>
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Логин" />
            <input type="password" className="form-control form-control-sm mb-2" placeholder="Пароль" />
            <button type="submit" className="btn btn-primary w-100">Войти</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown text-end">
      <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
        <div className="d-flex align-item-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/512/3276/3276580.png" alt="mdo" width="42" height="42" className="rounded-circle" />
          <span className="text-start lh-sm" style={{ fontSize: '0.8rem' }}>
            <strong>{user.login}</strong><br />{user.role}</span>
        </div>
      </a>
      <ul className="dropdown-menu">
        <li>
          <form action="/api/logout" method='POST'>
            <button className="dropdown-item">Выйти</button>
          </form>
        </li>
      </ul>
    </div>
  );
}