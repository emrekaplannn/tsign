import React from 'react';
import { Users, GraduationCap, Award, Compass, HardHat, Ruler, Code, Layout, Building2 } from 'lucide-react';

export default function Team({ t }) {
  const iconRoleMap = {
    'hard-hat': <HardHat size={22} color="#040070" />,
    'compass': <Compass size={22} color="#040070" />,
    'ruler': <Ruler size={22} color="#040070" />,
    'code': <Code size={22} color="#040070" />,
    'layout': <Layout size={22} color="#040070" />,
    'building': <Building2 size={22} color="#040070" />,
  };

  return (
    <section id="team" className="section" style={{
      backgroundColor: '#F8F9FA',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Users size={14} />
            <span>{t.team.tag}</span>
          </div>
          <h2 className="section-title">{t.team.title}</h2>
          <p className="section-subtitle">{t.team.subtitle}</p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {t.team.members.map((member, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 15px rgba(10, 30, 63, 0.04)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 30, 63, 0.1)';
                e.currentTarget.style.borderColor = '#040070';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(10, 30, 63, 0.04)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <div>
                {/* Member Header with Icon & Credentials */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(4, 0, 112, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {iconRoleMap[member.icon] || <Users size={22} color="#040070" />}
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: '#F1F4F9',
                    color: '#040070'
                  }}>
                    TSigN Uzmanı
                  </span>
                </div>

                {/* Member Name */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#0A1E3F',
                  marginBottom: '0.35rem'
                }}>
                  {member.name}
                </h3>

                {/* Role */}
                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#040070',
                  marginBottom: '0.75rem'
                }}>
                  {member.role}
                </div>

                {/* School / Credentials Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#475569',
                  backgroundColor: '#F8FAFC',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #EDF2F7',
                  marginBottom: '1.25rem'
                }}>
                  <GraduationCap size={15} color="#0A1E3F" />
                  <span>{member.school}</span>
                </div>

                {/* Bio */}
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748B',
                  lineHeight: 1.6
                }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
