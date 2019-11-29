export default [
  {
    header: true,
    title: 'Application Name',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Graphics',
    icon: 'fa fa-chart-area',
  },
  {
    title: 'Cruds',
    icon: 'fas fa-book-open',
    child: [
      {
        href: '/specialty',
        title: 'Especialidades',
        icon: 'fas fa-briefcase-medical',
      },
      {
        href: '/practice',
        title: 'Práticas',
        icon: 'fas fa-stethoscope',
      },
      {
        href: '/patient',
        title: 'Pacientes',
        icon: 'fas fa-procedures',
      },
    ],
  },
]
