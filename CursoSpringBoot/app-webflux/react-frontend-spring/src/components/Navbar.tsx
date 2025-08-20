import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useI18n } from '../i18n/I18nContext';
import LangPicker from './LangPicker';

const Navbar: React.FC = () => {
  const { isAuth, isAdmin, logout } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  return (
    <div className="nav">
      <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>{t('nav.products')}</NavLink>
      <NavLink to="/cart" className={({isActive})=> isActive ? 'active' : ''}>{t('nav.cart')}</NavLink>
      {isAuth && <NavLink to="/orders" className={({isActive})=> isActive ? 'active' : ''}>{t('nav.myOrders')}</NavLink>}
      {isAdmin && <NavLink to="/admin/products/new" className={({isActive})=> isActive ? 'active' : ''}>{t('nav.newProduct')}</NavLink>}
      <div style={{marginLeft:'auto', display:'flex', gap:12, alignItems:'center'}}>
        <LangPicker />
        {!isAuth ? (
          <>
            <NavLink to="/login" className={({isActive})=> isActive ? 'active' : ''}>{t('nav.login')}</NavLink>
            <NavLink to="/register" className={({isActive})=> isActive ? 'active' : ''}>{t('nav.register')}</NavLink>
          </>
        ) : (
          <button className="btn danger" onClick={()=>{ logout(); navigate('/'); }}>{t('nav.logout')}</button>
        )}
      </div>
    </div>
  );
}
export default Navbar;