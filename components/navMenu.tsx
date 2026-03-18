'use client';

import { routes } from '@/shared/config';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavMenu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} href={routes.home()}>SVET</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Категории">
              <NavDropdown.Item as={Link} href="#">База знаний (Dwarf)</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Служебный раздел</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Помощь</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Настройка клавиш системного телефона Samsung OfficeServ DS-5038s</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Быстрый доступ">
              <NavDropdown.Item as={Link} href="/phonebook">Телефонный справочник</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Отправить СМС администратору</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Меню в столовой</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Работники на территории</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Центр профессионального образования</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Сервис онлайн тестирования по ПБ</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Видео о профилактике мошенничества</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Служебный раздел">
              <NavDropdown.Item as={Link} href="/certificates">Сертификаты АО СВЕТ</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Сертификаты УКЭП</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Работники на территории</NavDropdown.Item>
              <NavDropdown.Item as={Link} href={routes.feedback()}>Обращения пользователей</NavDropdown.Item>
              <NavDropdown.Item as={Link} href={routes.ats.calls()}>ATS Info</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/mts/abonents">MTS info</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Rubular</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/localnet">Локальная сеть</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Производство">
              <NavDropdown.Item as={Link} href="/eticket/flow">Этикетка</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Архив ОТК</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Матрица ОТК</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Заявки ПСТ</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Учет выпускаемой продукции</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#">Весы КПП №2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
