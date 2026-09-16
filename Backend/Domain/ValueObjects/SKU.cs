using Domain.Common;
using System.Text.RegularExpressions;

namespace Domain.ValueObjects;

public sealed class SKU : ValueObject
{
    private static readonly Regex ValidFormat = new(@"^[A-Z0-9\-]+$", RegexOptions.Compiled);

    public string Value { get; }

    public SKU(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("SKU cannot be empty.", nameof(value));

        var normalized = value.Trim().ToUpperInvariant();

        if (!ValidFormat.IsMatch(normalized))
            throw new ArgumentException("SKU must contain only uppercase letters, digits and hyphens (e.g. PROD-001).", nameof(value));

        Value = normalized;
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Value;
    }

    public override string ToString() => Value;
}

