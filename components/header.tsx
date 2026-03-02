import Link from 'next/link';
import NavMenu from './navMenu';
import AuthBlock from './authBlock';

export default function Header() {
  return (
    <header className="bg-body-tertiary border-bottom" id="header">
      <div className="container-xxl">
        <div className="d-flex justify-content-between align-items-center">
          <NavMenu />

          <div className="d-flex align-items-center gap-3">
            <form className="d-none d-lg-block">
              <input type="search" className="form-control form-control-sm" placeholder="Search..." />
            </form>
            <AuthBlock />
          </div>
        </div>
      </div>
    </header>
  )
}