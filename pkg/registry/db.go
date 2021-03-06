package registry

import "github.com/lib/pq"

type Device struct {
	ID                              []byte         `gorm:"primary_key"`
	Name                            string         `gorm:"NOT NULL;unique_index:device_name_namespace_uq"`
	Tags                            pq.StringArray `gorm:"type:varchar(100)[]"`
	Enabled                         bool
	Certificate                     string `gorm:"unique_index"`
	CertificateType                 string
	CertificateFingerprint          []byte `gorm:"unique_index"`
	CertificateFingerprintAlgorithm string
}
